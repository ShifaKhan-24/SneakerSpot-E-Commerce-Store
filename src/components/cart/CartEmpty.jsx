import React from "react";
import emptybag from "../../assets/emptybag.png";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-7 h-screen">
        <img
          src={emptybag}
          alt=""
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          onClick={onCartToggle}
          className=" button-theme transitions-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 "
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="font-semibold">Back to the Store...</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
