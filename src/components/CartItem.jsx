import React, { useContext } from "react";
import FoodContext from "../context/FoodContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(FoodContext);

  const handleRemoveCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  const handleClickInc = () => {
    dispatch({
      type: "INCREASE_CART",
      payload: item,
    });
  };

  const handleClickDec = () => {
    dispatch({
      type: "DECREASE_CART",
      payload: item,
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl p-6 w-full max-w-2xl mx-auto rounded-lg">
      <img
        className="w-40 h-40 md:w-56 md:h-56 rounded-lg"
        src={`src/assets/food-imgs/${item.image}`}
        alt={item.title}
      />
      <div className="flex flex-col items-center md:items-start justify-between gap-2">
        <h2 className="text-xl md:text-2xl font-bold mt-4">{item.title}</h2>
        <p className="text-gray-600 font-normal text-center md:text-left">
          {item.description}
        </p>
        <h3 className="text-lg md:text-xl font-medium">${item.price}</h3>
        <button
          className="mt-2 py-2 px-6 rounded-full bg-red-500 text-white text-sm font-medium hover:border border-orange-500 hover:bg-white hover:text-black opacity-90 cursor-pointer transition duration-500 ease-in-out"
          onClick={() => handleRemoveCart(item.id)}>
          Remove Item
        </button>
        <div className="flex items-center justify-center gap-5 mt-2">
          <button
            className="border border-orange-500 py-0 px-5 text-lg rounded-md"
            onClick={handleClickDec}>
            −
          </button>
          <span className="text-lg font-medium">Qty: {item.qty}</span>
          <button
            className="border border-orange-500 py-0 px-5 text-lg rounded-md"
            onClick={handleClickInc}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
