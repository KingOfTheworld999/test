import React from "react";
import Header from "./Header/Header";
import Banner from "./banner/Banner";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from "./footer/Footer";
import GetThuongHieu from "./slideSanPham/GetThuongHieu";
import SlideAnh from "./slide/SlideAnh";
import MainThanWeb from "./slideSanPham/MainThanWeb";

import { CartProvider, useCart } from "./context/context";

function App() {
  return (
    <CartProvider>
        <AppContent />
    </CartProvider>
  );
}

function AppContent() {
  // Sử dụng hook useCart trong component function
  const { isCartVisible } = useCart();

  return (
    <>
      
      <Header />
      <Banner />
   <MainThanWeb />
      <SlideAnh />
      <GetThuongHieu />
      <Footer />
     
    </>
  );
}

export default App;
