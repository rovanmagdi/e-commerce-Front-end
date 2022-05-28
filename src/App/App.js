import "../App/App";
import Navbar from '../component/Navbar'
import Home from "../screen/Home";
import ProductsScreen from "../screen/ProductsScreen";
import DetailsScreen from "../screen/DetailsScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "../screen/CartScreen";
import Login from "../component/Login";
import Register from "../component/RegisterComponent";
import ShippingScreen from "../screen/ShippingScreen";
// import DetailsProducts from "../component/DetailsProducts";
// import Login from "../component/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/products" element={<ProductsScreen/>} />
          <Route path="/products/:id" element={<DetailsScreen />} />
          <Route path="/cart/:id" element={<CartScreen/>} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />





          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
