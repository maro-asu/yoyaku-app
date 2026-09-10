import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurants } from "../context/useRestaurants";
import { useNotifications } from "../context/useNotifications";

function RestaurantDetail() {
  const { id } = useParams();
  const { restaurants } = useRestaurants();
  const { notifications } = useNotifications();
  const [isReserved, setIsReserved] = useState(false);

  const restaurant = restaurants.find((r) => r.id === id);
  const relatedNotification = notifications.find(
    (n) => n.restaurantId === id
  );

  const handleReserve = () => {
    setIsReserved(true);
  };

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

      {relatedNotification && !isReserved && (
        <div>
          <p>空き時間: {relatedNotification.availableSlot}</p>
          <button onClick={handleReserve}>この時間で予約する</button>
        </div>
      )}

      {isReserved && <p>✅ 予約が完了しました!</p>}
    </div>
  );
}

export default RestaurantDetail;