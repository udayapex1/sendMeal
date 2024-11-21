import React, { useContext, useEffect, useState } from 'react';
import FoodContext from '../context/FoodContext';

const FoodCard = ({ item }) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const { btnDisable, dispatch } = useContext(FoodContext);

  useEffect(() => {
    const val = btnDisable.filter((data) => data.id === item.id);
    if (val.length > 0) {
      setButtonDisable(true);
    }
  });

  const getFoodData = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
    dispatch({
      type: 'BUTTON_DISABLE',
      payload: item.id,
    });
    setButtonDisable(true);
  };

  return (
    <div className='flex items-center justify-center gap-6 mt-12 flex-wrap'>
      <>
        <div className='flex flex-col items-center justify-center gap-2 shadow-xl p-6 w-[310px] rounded-[15px]'>
          <img
            className='w-[14rem] h-[14rem] rounded-lg'
            src={`src/assets/food-imgs/${item.image}`}
            alt=''
          />
          <h2 className='text-2xl font-bold mt-4'>{item.title}</h2>
          <p className='text-[#878794] font-normal text-center'>
            {item.description}
          </p>
          <h3 className='text-[18px] font-medium'>${item.price}</h3>
          <button
            className='mt-3 py-[10px] px-6 rounded-full bg-[#FF9800] text-sm font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out'
            href='#'
            onClick={() => getFoodData(item)}
            disabled={buttonDisable}
          >
            Add To Cart
          </button>
        </div>
      </>
    </div>
  );
};

export default FoodCard;
