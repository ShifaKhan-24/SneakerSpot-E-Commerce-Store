import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  //   console.log(endpoint);
  return (
    <>
      <div className="nike-container ">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center ${
            ifExists
              ? "grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-7 md:gap-8"
              : "grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 my-7"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} /> // destructuring the props of each item in items array (ie, id,title,text,etx)
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
