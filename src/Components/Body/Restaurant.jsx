import React from "react";
import { CDN_URL } from "../../utils/constant.js";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
  const { id, name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    props?.data.info;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link to={`/restaurant/${id}`}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <div className="mt-2 text-sm text-gray-600">
            <div className="truncate">{cuisines.join(", ")}</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-yellow-500 font-semibold">{avgRating} ★</div>
              <div className="text-gray-700">{costForTwo}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Restaurant;

export const withRestaurantPromoted = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className=" bg-black-100 m-2 p-2">Open</label>
        <Restaurant {...props} />
      </div>
    );
  };
};
