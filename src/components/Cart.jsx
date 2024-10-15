import { MdOutlineClose } from 'react-icons/md';
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BsCartCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  // ye cart array mai jitna cart items hongi wo le aye ga. Reduce aik single value return krta hai.
  const cartItems = useSelector((state) => state.cart.cart);

  // totalQty variable btae ga total items kitne select kiye hain cart mai.
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  // const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)
  const totalPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.qty * item.price; // agr item ki qty 2 hai or price 160 hai to 2 * 160 = 320
  }, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[23vw] bg-white h-full p-3 ${
          activeCart ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-500 z-10 border shadow-md`}
      >
        <div className="flex justify-between">
          <span className="font-bold text-xl text-gray-600">My Order</span>
          <MdOutlineClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-extrabold rounded-md p-1 text-2xl hover:text-red-400 hover:border-red-400 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-lg font-bold ">Your Cart Is Empty</h2>
        )}

        <div className="absolute bottom-0 border-2 shadow-md w-full p-3">
          <h3 className="font-semibold text-gray-800">
            Items : <span className="font-extrabold">{totalQty}</span>
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: <span className="font-extrabold">{totalPrice}</span>{' '}
          </h3>
          <hr className="m-2" />
          <button onClick={() => navigate("/success")} className="bg-green-500 font-bold px-4 py-2 text-white rounded-lg mb-3">
            Checkout
          </button>
        </div>
      </div>
      <BsCartCheckFill
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-9 right-4 cursor-pointer hover:bg-gray-300 ${
          totalQty > 0 ? 'animate-bounce delay-500 transition-all' : null
        }`}
      />
    </>
  );
};

export default Cart;
