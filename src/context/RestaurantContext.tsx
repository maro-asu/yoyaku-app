import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Restaurant } from "../types/restaurant";
import { RestaurantContext } from "./restaurantContextDef";

const STORAGE_KEY = "restaurants";

function loadRestaurants(): Restaurant[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];
  return JSON.parse(saved);
}

export function RestaurantProvider({ children }: { children: ReactNode }) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(loadRestaurants);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(restaurants));
  }, [restaurants]);

  const addRestaurant = (restaurant: Restaurant) => {
    setRestaurants((prev) => [...prev, restaurant]);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
}