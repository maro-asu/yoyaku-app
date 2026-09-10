import { useParams } from "react-router-dom";
import { useRestaurants } from "../context/useRestaurants";

function RestaurantDetail() {
  const { id } = useParams();
  const { restaurants } = useRestaurants();

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div>
        <h1>お店が見つかりませんでした</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        style={{ width: "300px" }}
      />
      <p>ジャンル: {restaurant.genre}</p>
      <p>場所: {restaurant.area}</p>
    </div>
  );
}

export default RestaurantDetail;