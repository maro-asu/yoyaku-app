import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestaurantProvider } from "./context/RestaurantContext";
import { NotificationProvider } from "./context/NotificationContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import RegisterRestaurant from "./pages/RegisterRestaurant";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  return (
    <RestaurantProvider>
      <NotificationProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterRestaurant />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </RestaurantProvider>
  );
}

export default App;