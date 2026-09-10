import { createContext } from "react";
import type { Restaurant } from "../types/restaurant";

export type RestaurantContextType = {
  restaurants: Restaurant[];
  addRestaurant: (restaurant: Restaurant) => void;
};

export const RestaurantContext = createContext<RestaurantContextType | undefined>(
  undefined
);