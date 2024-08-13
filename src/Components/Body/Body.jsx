import React, { useState, useEffect } from "react";
import Restaurant, { withRestaurantPromoted } from "./Restaurant";
import Shimmer from "../Shimmer/Shimmer";

const PromotedRestaurant = withRestaurantPromoted(Restaurant);

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterredResList, setfilterredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5868397&lng=73.68599499999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterredResList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleClick = () => {
    let filterData = filterredResList.filter((res) => res.info.avgRating > 4);
    setfilterredResList(filterData);
  };

  const handleSearch = () => {
    let filterRes = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterRes);

    setfilterredResList(filterRes);
  };

  return filterredResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-10">
      <div className="flex flex-col sm:flex-row my-7 items-center gap-4">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400 transition-colors duration-200 w-full sm:w-auto"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for restaurants..."
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
          onClick={() => handleSearch()}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
          onClick={handleClick}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filterredResList &&
          filterredResList.map((restaurant) =>
            restaurant.info.isOpen ? (
              <PromotedRestaurant data={restaurant} />
            ) : (
              <Restaurant key={restaurant.id} data={restaurant} />
            )
          )}
      </div>
    </div>
  );
};

export default Body;
