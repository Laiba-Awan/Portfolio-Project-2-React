import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import LogIn from "./pages/logIn/LogIn";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ErrorPage from "./pages/error/ErrorPage";
import LogOut from "./pages/logOut/LogOut";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

// remember to add loader before anything appears on the screen

function App() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="App">
      <Navigation size={cart.length} />
      <ToastContainer autoClose={1000} position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
