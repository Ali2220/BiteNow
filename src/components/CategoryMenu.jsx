import React, { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { SetCategory } from '../redux/slices/CategorySlice';
const CategoryMenu = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const listUniqueCategory = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setData(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategory();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <>
      <div className="m-5 px-3">
        <h3 className="font-medium">Find the best food</h3>

        <div className="my-3 flex gap-3 flex-wrap">
          <button
            onClick={() => dispatch(SetCategory('All'))}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" ? 'bg-green-500 text-white' : ''} `}
          >
            All
          </button>
          {data.map((category, index) => (
            <>
              <button
                onClick={() => dispatch(SetCategory(category))}
                key={index}
                className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  ${selectedCategory === category ? 'bg-green-500 text-white' : ''}`}
              >
                {category}
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
