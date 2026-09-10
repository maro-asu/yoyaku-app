import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRestaurants } from "../context/RestaurantContext";

function RegisterRestaurant() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");

  const { addRestaurant } = useRestaurants();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRestaurant = {
      id: Date.now().toString(),
      name,
      genre,
      area,
      imageUrl: "https://placehold.jp/280x100.png",
    };

    addRestaurant(newRestaurant);
    navigate("/");
  };

  // この下の return(...) の部分は変更なし
  return (
    <div>
      <h1>お店登録画面</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">お店の名前</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="genre">ジャンル</label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="area">場所</label>
          <input
            id="area"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">希望日</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="time">希望時間</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="people">人数</label>
          <input
            id="people"
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>

        <button type="submit">登録する</button>
      </form>
    </div>
  );
}

export default RegisterRestaurant;