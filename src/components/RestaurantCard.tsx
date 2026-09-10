import { useNavigate } from "react-router-dom";
import type { Restaurant } from "../types/restaurant";
import "./RestaurantCard.css";

type Props = {
  restaurant: Restaurant;
};

function RestaurantCard({ restaurant }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <div className="restaurant-card" onClick={handleClick}>
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="restaurant-card__image"
      />
      <div className="restaurant-card__body">
        <h3 className="restaurant-card__name">{restaurant.name}</h3>
        <p className="restaurant-card__info">
          {restaurant.genre} ・ {restaurant.area}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;