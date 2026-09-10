import { useNavigate } from "react-router-dom";
import type { Notification } from "../types/notification";
import "./NotificationCard.css";

type Props = {
  notification: Notification;
};

function NotificationCard({ notification }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${notification.restaurantId}`);
  };

  return (
    <div className="notification-card" onClick={handleClick}>
      <p className="notification-card__message">{notification.message}</p>
      <p className="notification-card__restaurant">
        {notification.restaurantName}
      </p>
      <p className="notification-card__date">{notification.createdAt}</p>
    </div>
  );
}

export default NotificationCard;