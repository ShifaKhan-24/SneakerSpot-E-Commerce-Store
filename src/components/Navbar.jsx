import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCart, selectCartTotalQTY } from "../app/CartSlice";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectCartTotalQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "top-0 left-0 right-0 fixed flex justify-center items-center blur-effect-theme h-[9vh] opacity-100 z-[200] transition-all duration-300"
        }`}
      >
        <nav className="nike-container flex justify-between items-center ">
          <div className="flex items-center">
            <img
              src={logo}
              className={` w-16 h-auto ${navState && "filter brightness-0"} `}
              alt=""
            />
          </div>
          <ul className="flex justify-center items-center gap-2">
            <li className={`grid items-center `}>
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                className="border-none outline-none active:scale-110 transition-all 400 relative"
                onClick={onCartToggle}
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0  w-4 h-4 text-[0.6rem] leading-tight rounded-full font-medium transition-all flex items-center justify-center duration-400 ${
                    navState
                      ? "bg-black text-slate-100 shadow-slate-900"
                      : " bg-white shadow-slate-100 text-slate-900 "
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
