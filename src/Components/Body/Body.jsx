import React, { useState } from "react";
import Restaurant from "./Restaurant";
import "./Restaurant.css";
import { restaurants } from "../../utils/mockData.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(restaurants);
  const handleClick = () => {
    restaurantList = restaurantList.filter((res) => res.info.avgRating > 4);
    console.log(restaurantList);
    setRestaurantList(restaurantList);
  };
  return (
    <div className="body">
      {/* <div className="search-bar">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList &&
          restaurantList.map((restaurant) => (
            <Restaurant key={restaurant.id} data={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
