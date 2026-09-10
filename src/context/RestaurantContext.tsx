import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Restaurant } from "../types/restaurant";

type RestaurantContextType = {
  restaurants: Restaurant[];
  addRestaurant: (restaurant: Restaurant) => void;
};

const RestaurantContext = createContext<RestaurantContextType | undefined>(
  undefined
);

export function RestaurantProvider({ children }: { children: ReactNode }) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const addRestaurant = (restaurant: Restaurant) => {
    setRestaurants((prev) => [...prev, restaurant]);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurants() {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error(
      "useRestaurants must be used within a RestaurantProvider"
    );
  }
  return context;
}