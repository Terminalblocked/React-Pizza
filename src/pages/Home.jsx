import React from 'react';
import PizzaCard from '../components/PizzaCard';
import Skeleton from '../components/PizzaCard/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://6499a0c379fbe9bcf83fa420.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => {
              return <PizzaCard {...obj} key={obj.id} />;
            })}
      </div>
    </>
  );
}
