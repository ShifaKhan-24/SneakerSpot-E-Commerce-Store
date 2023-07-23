import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../app/CartSlice";

const CartItem = ({
  item: { id, title, img, text, price, color, shadow, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        img,
        text,
        price,
        color,
        shadow,
        cartQuantity,
      })
    );
  };

  const onIncItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        img,
        text,
        price,
        color,
        shadow,
        cartQuantity,
      })
    );
  };
  const onDecItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        img,
        text,
        price,
        color,
        shadow,
        cartQuantity,
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={` flex items-center p rounded-xl relative bg-gradient-to-b ${color} ${shadow} hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer`}
          >
            <img
              src={img}
              alt={`img/cart/item/${id} `}
              className="w-36 h-auto lg:w-28 p-2"
            />
          </div>
          <div className="flex flex-col justify-items-center mb-black">
            <div>
              <h1 className="text-md font-semibold ">{title}</h1>
              <p className="text-sm">{text}</p>
            </div>
            <div className="flex items-center w-full justify-around ">
              <button
                onClick={onDecItemQTY}
                type="button"
                className="flex bg-theme-cart rounded justify-center items-center w-6 h-6 lg:w-5 lg:h-5 active:scale-90"
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
              </button>

              <div className=" bg-theme-cart flex justify-center items-center text-white rounded w-8 h-6 lg:w-6  lg:text-md p-1">
                {cartQuantity}
              </div>

              <button
                type="button"
                onClick={onIncItemQTY}
                className="flex bg-theme-cart rounded justify-center items-center w-6 h-6 lg:w-5 lg:h-5 active:scale-90"
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 items-center">
          <div>
            <h1 className="text-lg lg:text-slate-900 font-medium">
              ${price * cartQuantity}
            </h1>
          </div>

          <div className="text-white  grid justify-items-center items-center  active:scale-90 transition-all duration-350">
            <button
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 cursor-pointer"
              onClick={onRemoveItem}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
