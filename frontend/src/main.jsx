import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router và Routes từ react-router-dom

import App from './App.jsx';
import MainThanWeb from './slideSanPham/MainThanWeb.jsx'; // Import MainThanWeb

import ChinhSachBaoMat from './fileLienKetHTML/ChinhSachBaoMat.jsx';
import Contact from './fileLienKetHTML/Contact.jsx';
import DieuKhoanSuDung from './fileLienKetHTML/DieuKhoanSuDung.jsx';
import DoiTac from './fileLienKetHTML/DoiTac.jsx';
import GioiThieu from './fileLienKetHTML/GioiThieu.jsx';
import LienHeAdmin from './fileLienKetHTML/LienHeAdmin.jsx';
import TuVan from './fileLienKetHTML/TuVan.jsx';
import ChinhSachHoanHang from './fileLienKetHTML/ChinhSachHoanHang.jsx';

import ProductList from './slideSanPham/ProductList.jsx';
import ProductDetail from './slideSanPham/ProductDetail.jsx';
import GioHang from './slideSanPham/GioHang.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Bọc toàn bộ ứng dụng trong Router */}
      <Routes>
        <Route path="/" element={<App />} />  {/* Trang chính */}
        <Route path="/MainThanWeb/*" element={<MainThanWeb />} />  {/* Dẫn tới MainThanWeb */}
        <Route path="/TuVan" element={<TuVan />} />
        <Route path="/ChinhSachHoanHang" element={<ChinhSachHoanHang />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DieuKhoanSuDung" element={<DieuKhoanSuDung />} />
        <Route path="/DoiTac" element={<DoiTac />} />
        <Route path="/GioiThieu" element={<GioiThieu />} />
        <Route path="/LienHeAdmin" element={<LienHeAdmin />} />
        <Route path="/ChinhSachBaoMat" element={<ChinhSachBaoMat />} />


        <Route path="/" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/giohang" element={<GioHang />} />
      </Routes>
    </Router>
  </StrictMode>
);
