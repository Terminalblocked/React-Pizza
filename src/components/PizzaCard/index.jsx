import React from 'react';

export default function PizzaCard({ imageUrl, title, types, sizes, price }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-card-wrapper">
      <div className="pizza-card">
        <img className="pizza-card__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-card__title">{title}</h4>
        <div className="pizza-card__selector">
          <ul>
            {types.map((typeNumber, index) => {
              return (
                <li
                  className={activeType === typeNumber ? 'active' : ''}
                  onClick={() => setActiveType(index)}
                  key={index}>
                  {typeNames[typeNumber]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, index) => {
              return (
                <li
                  className={activeSize === index ? 'active' : ''}
                  onClick={() => setActiveSize(index)}
                  key={index}>
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-card__bottom">
          <div className="pizza-card__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
      </div>
    </div>
  );
}
