import React, { useState } from "react";

function Item({ name, category }) {
  // States
  const [isInCart, setIsInCart] = useState(""); // "in-cart" = item in cart; "" = item is not in cart

  // Event Handlers
  function handleOnClick(event){
    // console.log(isInCart)
    isInCart === "" ? setIsInCart("in-cart") : setIsInCart("");
  }
  

  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleOnClick}>{isInCart === "" ? "Add from Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
