import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const onaddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} 
        ${
          ifExists ? "justify-items-start" : "justify-items-center"
        }grid items-center  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full cursor-pointer hover:scale-105 `}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          } `}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200  lg:text-lg md:text-sm text-base font-normal filter drop-shadow">
            {text}
          </p>
          <div className="flex items-center my-2 justify-between w-28">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onaddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900  " />
            </button>
            <button
              type="button"
              onClick={() => {
                onCartToggle();
                onaddToCart();
              }}
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 text-sm text-black px-2 py-1 "
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex-items-center ${
            ifExists ? "absolute top-4 right-1" : ""
          }`}
        >
          <img
            src={img}
            alt={`img/items-mg ${id}`}
            className={` transitions-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-56  lg:w-56 md:48  -rotate-[28deg] mx-3  "
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
