import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({ food, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={food.id}
      className="font-bold w-[250px] bg-white p-3 flex flex-col gap-3 rounded-lg m-3 min-h-[300px] justify-between my-10"
    >
      <img
        className="w-auto h-[150px] hover:scale-105 transition-all duration-300 ease-in-out cursor-grab"
        src={food.img}
        alt={food.name}
      />
      <div className="flex-1">
        <h2 className="text-sm flex justify-between items-center">
          {food.name} <span className="text-green-500">{food.price}</span>
        </h2>
        <p className="text-sm font-normal">{food.desc.slice(0, 50)}...</p>
      </div>

      <div className="flex justify-between items-center text-sm mt-2">
        <span className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" /> {food.rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id: food.id,
                name: food.name,
                price: food.price,
                rating: food.rating,
                qty: 1,
                img: food.img,
              })
            );
            handleToast();
          }}
          className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
