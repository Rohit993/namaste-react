import React from "react";
import { CDN_URL } from "../../utils/constant";

const ItemList = ({ item }) => {
  const dataItem = item.card.info;
  console.log(dataItem);

  return (
    <div className="flex justify-between py-2 my-2 [&:not(:last-child)]:border-b-2">
      <div className="flex-1 text-start">
        <h2 className="py-1  font-semibold">{dataItem.name}</h2>
        <h4>
          ₹{" "}
          {dataItem.price ? dataItem.price / 100 : dataItem.defaultPrice / 100}
        </h4>
        <span
          className={`font-bold text-sm ${
            Number(dataItem?.ratings?.aggregatedRating?.rating) > 3
              ? "text-green-600"
              : "text-orange-400"
          }`}
        >
          ⭐ {dataItem?.ratings?.aggregatedRating?.rating}
        </span>{" "}
        <span className="text-sm">
          ({dataItem?.ratings?.aggregatedRating?.ratingCount})
        </span>
        <p className="text-sm my-2">{dataItem.description}</p>
      </div>
      <div>
        <img
          className="w-full h-48 rounded-3xl flex-1 m-4 px-4 "
          src={CDN_URL + dataItem.imageId}
          alt="item image"
        />
      </div>
    </div>
  );
};

export default ItemList;
