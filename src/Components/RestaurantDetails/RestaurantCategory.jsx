import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="w-8/12 mx-auto  text-center p-4 m-4 shadow-md">
      <div className="flex flex-row justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{"🔻"}</span>
      </div>
      <div>
        {data.itemCards.map((i) => (
          <ItemList item={i} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
