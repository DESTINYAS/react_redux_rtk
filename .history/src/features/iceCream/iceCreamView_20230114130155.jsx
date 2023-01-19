import React from "react";
import { useSelector } from "react-redux";

export const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  return (
    <div>
      <h2>Number of ice Creams - {numOfIceCream}</h2>
      <button>Order ice Cream</button>
      <button>Restock ice Creams</button>
    </div>
  );
};
