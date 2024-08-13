import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../../utils/useRestaurantDetails";
import Shimmer from "../Shimmer/Shimmer";
import RestaurantCategory from "../RestaurantDetails/RestaurantCategory";

const RestaurantDetails = () => {
  const resId = useParams("id");
  const resInfo = useRestaurantDetails(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

  const catogories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(catogories);

  return (
    <div className="text-center my-4 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
      <p className="text-lg text-gray-600 mb-6">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {catogories &&
        catogories.map((category) => (
          <RestaurantCategory data={category.card.card} />
        ))}
    </div>
  );
};

export default RestaurantDetails;
