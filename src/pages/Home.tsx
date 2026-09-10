import RestaurantCard from "../components/RestaurantCard";
import { mockRestaurants } from "../mock/restaurants";

function Home() {
  return (
    <div>
      <h1>ホーム画面</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {mockRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Home;