import RestaurantCard from "../components/RestaurantCard";
import { useRestaurants } from "../context/useRestaurants";

function Home() {
  const { restaurants } = useRestaurants();

  return (
    <div>
      <h1>ホーム画面</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Home;