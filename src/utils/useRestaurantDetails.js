import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantDetails = ({ id }) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_URL + id);
    const data = await res.json();
    setResInfo(data.data);
  };

  return resInfo;
};
export default useRestaurantDetails;
