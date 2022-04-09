import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/AboutUs/AboutUs";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Favorites from "./pages/Favorites/Favorites";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products/:productID" element={<Product />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
