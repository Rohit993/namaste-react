import React from "react";
import "./Restaurant.css";
import { CDN_URL } from "../../utils/constant.js";

const Restaurant = (props) => {
  console.log(props);
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    props?.data.info;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
        className="res-img"
      />
      <p className="res-name">{name}</p>
      <div className="card-metadata">
        <div className="res-cusine">{cuisines.join(", ")}</div>
        <div className="avg-rating">{avgRating}</div>
        <div className="res-priceForTwo">{costForTwo}</div>
      </div>
    </div>
  );
};

export default Restaurant;
