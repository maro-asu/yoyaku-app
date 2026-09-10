import RestaurantCard from "../components/RestaurantCard";
import NotificationCard from "../components/NotificationCard";
import { useRestaurants } from "../context/useRestaurants";
import { useNotifications } from "../context/useNotifications";

function Home() {
  const { restaurants } = useRestaurants();
  const { notifications } = useNotifications();

  return (
    <div>
      <h1>ホーム画面</h1>

      <h2>キャンセル通知</h2>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>

      <h2>行きたいお店</h2>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Home;