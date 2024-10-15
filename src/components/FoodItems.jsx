import React from 'react';
import FoodCard from './FoodCard';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import FoodData from '../data/FoodData';

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => {
    toast.success('Your item is added to Cart');
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-center">
        {FoodData.filter((food) => {
          if (category === 'All') {
            return food.name.toLowerCase().includes(search.toLowerCase()); // 'All' selected means show all items
          } else {
            return category === food.category; // Show only matching category items
          }
        }).map((food) => (
          <FoodCard key={food.id} food={food} handleToast={handleToast} />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
