import React from 'react';
import PizzaCard from '../components/PizzaCard';
import Skeleton from '../components/PizzaCard/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Популярности',
    sortParam: 'rating',
  });

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sort = sortType.sortParam.replace("-", "");
  const order = sortType.sortParam.includes("-") ? "desc" : "asc";

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6499a0c379fbe9bcf83fa420.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onClickSort={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => {
              return <PizzaCard {...obj} key={obj.id} />;
            })}
      </div>
    </div>
  );
}
