import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="nike-conatiner bg-theme text-white pt-7 pb-5 mt-10 justify-center grid">
        <div className="flex ">
          <div className="grid grid-cols-3 gap-5 items-start max-w-2xl w-full m-auto md:max-w-none md:gap-5 ">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h1 className=" text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul className="grid items-center gap-1 " key={i}>
                {list.map((link, i) => (
                  <li className=" text-sm sm:text-xs" key={i}>
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-5 text-center  w-[100vh]">
          <p className="text-sm md:text-center">
            Copyright<sup className="text-base font-bold">&copy;</sup>All Rights
            Reserved 2023
            <span className="font-semibold"> SHIFA KHAN</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
