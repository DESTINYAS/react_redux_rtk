import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice Creams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice Cream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock ice Creams</button>
    </div>
  );
};
