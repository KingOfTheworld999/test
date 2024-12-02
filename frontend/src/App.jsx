import React from "react";
import Header from "./Header/Header";
import Banner from "./banner/Banner";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from "./footer/Footer";
import GetThuongHieu from "./slideSanPham/GetThuongHieu";
import SlideAnh from "./slide/SlideAnh";
import ProductList from './slideSanPham/ProductList';
import ProductDetail from './slideSanPham/ProductDetail';
import GioHang from './slideSanPham/GioHang';
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
      <Router>
      <Header />
      <Banner />
      <Routes v7_startTransition={true}>
        <Route path="/" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/giohang" element={<GioHang />} />
      </Routes>
      <SlideAnh />
      <GetThuongHieu />
      <Footer />
      </Router>
    </>
  );
}

export default App;
