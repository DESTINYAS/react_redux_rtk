import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [quantity, setQuantity] = React.useState(1);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice Creams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice Cream</button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parent(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(quantity))}>
        Restock ice Creams
      </button>
    </div>
  );
};
