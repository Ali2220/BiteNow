import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from '../redux/slices/CartSlice';

const ItemCart = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div key={id} className="flex gap-2 shadow-md rounded-lg p-4 mb-3">
        <MdDelete
          onClick={() => dispatch(removeFromCart({ id }))}
          className="absolute right-4 text-gray-600 cursor-pointer hover:text-red-600 text-xl"
        />
        <img className="w-10 h-10" src={img} alt="img" />
        <div>
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between gap-6">
            <span className="text-green-500 font-bold">
              {price}
              <span className="text-gray-600 mx-1">Rs</span>
            </span>
            <div className="flex justify-center items-center absolute right-7 gap-2">
              <FaMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : null
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
              <span>{qty}</span>
              <FaPlus
                onClick={() => dispatch(incrementQty({ id }))}
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
