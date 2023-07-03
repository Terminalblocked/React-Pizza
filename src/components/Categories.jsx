import React from 'react'

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const onClickCaregory = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => {
            return <li onClick={() => onClickCaregory(index)} key={index} className={activeIndex === index ? "active": ""}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}
