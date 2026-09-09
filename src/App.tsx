import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterRestaurant from "./pages/RegisterRestaurant";
import RestaurantDetail from "./pages/RestaurantDetail";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterRestaurant />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;