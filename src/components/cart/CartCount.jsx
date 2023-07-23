import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
const CartCount = ({ onCartToggle, clearCartItems, totalQTY }) => {
  return (
    <>
      <div className="flex gap-2 bg-white h-11 items-center justify-between top-0 sticky left-0 right-0 px-3 w-full transition-all duration-300">
        <div className="flex items-center gap-3">
          <div
            className=" grid items-center cursor-pointer"
            onClick={onCartToggle}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 hover:text-blue-500 stroke-[2]  active:scale-110" />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <h1 className="font-medium"> Your Cart</h1>
            <span className="bg-black text-sm px-2 py-1 text-white rounded-sm">
              {`${totalQTY} Items`}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-medium "> {`Clear Cart ->`} </p>
          <button type="button" onClick={clearCartItems}>
            <XMarkIcon className="w-5 h-5 active:scale-110  bg-black stroke-[2] text-white rounded-sm" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
