import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useCart } from "../context/context";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const { isCartVisible, setIsCartVisible } = useCart();

  useEffect(() => {
    // Cập nhật số lượng giỏ hàng khi component được mount
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">
          <h3>Trang Chủ</h3>
        </Link>
        <Link
          to="/giohang"
          className="nav-link"
          onClick={() => setIsCartVisible(!isCartVisible)}
        >
          <h3>Giỏ Hàng</h3>
        </Link>
        <a href="/Lienheadmin.html" className="nav-link">
          <h3>Liên Hệ</h3>
        </a>
        <a href="/GioiThieu.html" className="nav-link">
          <h3>Giới Thiệu</h3>
        </a>
      </div>
      <div className="navbar-right">
        <a href="https://ditcuchungmay.linkpc.net/endpoints/req/login">
          <h3 className="nav-link">Đăng Nhập</h3>
        </a>
        <a href="https://ditcuchungmay.linkpc.net/endpoints/req/signup">
          <h3 className="nav-link">Đăng Ký</h3>
        </a>
      </div>
    </div>
  );
}

export default Header;
