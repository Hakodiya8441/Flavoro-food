import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [activeCart, setActiveCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-31 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-700">My Orders</span>
          <IoMdClose
            className="border-2 border-gray-600 text-gray-600 p-1 text-lg rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer"
            onClick={() => setActiveCart(!activeCart)}
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <CartItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                rating={food.rating}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-xl text-center font-bold text-gray-600 underline">
            Your Cart is Empty...!
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items :{totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount :{totalPrice}
          </h3>
          <hr className="w-[90vw] lg:[18vw] my-2" />
          <button
            className="bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[18vw] hover:bg-green-600 duration-500 mb-5"
            onClick={() => navigate("/success")}
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
}

export default Cart;
