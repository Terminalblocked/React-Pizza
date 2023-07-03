import React from 'react';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>Burger</div>
  );
}
