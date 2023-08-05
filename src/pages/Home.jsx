import React from 'react';

import qs from 'qs';
import PizzaCard from '../components/PizzaCard';
import Skeleton from '../components/PizzaCard/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { sortMenu } from '../components/Sort';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzas } from '../redux/slices/pizzaSlice';

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { items, status } = useSelector(selectPizzas);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortParam.replace('-', '');
    const order = sort.sortParam.includes('-') ? 'desc' : 'asc';
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      }),
    );
  };

  // If you changed the parameters and the first rendering occurred
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortParam: sort.sortParam,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortParam, currentPage]);

  // If there was the first render, then we check the URl parameters and save them in the redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortMenu.find((obj) => obj.sortParam === params.sortParam);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  // If there was the first render, then we request pizza
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortParam, searchValue, currentPage]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj, index) => {
    return <PizzaCard {...obj} key={index} />;
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>Не удалось получить пиццы, попробуйте позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination onChangePage={onChangePage} />
    </div>
  );
}
