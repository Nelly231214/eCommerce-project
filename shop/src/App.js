
import './App.css';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import {Route, Routes, Navigate} from "react-router-dom"
import Products from './components/Products';
import Success from './pages/Success';
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/success" element={<Success />} />
    <Route path="/login" element={user ? <Navigate replace path="/" /> : <Login/> } />
    <Route path="/register" element={<Register />} />
  </Routes>
  )
}

export default App;
