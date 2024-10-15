import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {
  const date = new Date().toUTCString().slice(0, 16);
  const dispatch = useDispatch()

  return (
    <nav className='flex flex-col lg:flex-row justify-between p-3 mx-5'>
      <div>
        <h3 className='text-xl, font-bold text-gray-600'>{date}</h3>
        <h1 className='text-2xl font-bold'>BiteNow</h1>
      </div>

      <div>
        <input
        className='p-3 border border-gray-400 text-sm rounded-md outline-none w-full lg:w-[25vw] mt-3'
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="true"
          onChange = {(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
