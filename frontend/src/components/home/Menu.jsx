import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/images/burgerHome.jpg";
import burger2 from "../../assets/images/burger2.webp";
import CheeseVadapav from "../../assets/images/cheese_vadapav.jpg";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={120}
          title="Cheese Burger"
          delay={0.1}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={150}
          title="Veg Cheese Burger"
          delay={0.5}
          handler={addToCartHandler}
        />
        {/* <MenuCard
          itemNum={1}
          burgerSrc={burger3}
          price={800}
          title="Hamburger"
          handler={addToCartHandler}
        /> */}
        {/* <MenuCard
          itemNum={1}
          burgerSrc={vadapav}
          price={120}
          title="Vadapav"
          handler={addToCartHandler}
        /> */}
        <MenuCard
          itemNum={3}
          burgerSrc={CheeseVadapav}
          price={70}
          title="Cheese Vadapav"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
