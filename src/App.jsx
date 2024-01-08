import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign Up/SignUp";
import ProductDetails from "./Pages/Product-Details";
import AddingProduct from "./Components/Adding-Product/AddingProduct";
import AuthContext from "./Global-Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddingProduct />} />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
