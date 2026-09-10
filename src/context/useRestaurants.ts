import { useContext } from "react";
import { RestaurantContext } from "./restaurantContextDef";

export function useRestaurants() {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error(
      "useRestaurants must be used within a RestaurantProvider"
    );
  }
  return context;
}