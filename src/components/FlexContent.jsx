import React from "react";

const FlexContent = ({
  ifExists,
  endpoint: { heading, title, text, btn, url, img },
}) => {
  return (
    <>
      <div
        className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${
          ifExists ? "flex-row-reverse" : "flex-row"
        } `}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
            {heading}
          </h1>
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold">
            {title}
          </h1>
          <p className="xl:text-sm my-4">{text}</p>
          <a
            className="flex items-center"
            target="_blank"
            role="button"
            href={url}
          >
            <button className="button-theme bg-black shadow-slate-900 text-slate-100 blur-effect-theme py-2 text-lg">
              {btn}
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full ">
          <img
            className={` w-auto object-fill transitions-theme ${
              ifExists
                ? "h-60 lg:h-56 mt-3 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12"
                : "h-72 lg:h-64 md:h-60 mb-8 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12"
            }`}
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
