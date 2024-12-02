import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure you're using the correct React Router version (v6)
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import GioHang from './GioHang';
import Header from '../Header/Header';

const MainThanWeb = () => {
    return (
        <Router>
            <Header />
            <Routes>  {/* Use Routes instead of Switch for v6 */}
                <Route path="/" element={<ProductList />} /> 
                <Route path="/product-detail/:id" element={<ProductDetail />} />  
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/giohang" element={<GioHang />} />
            </Routes>
        </Router>
    );
};

export default MainThanWeb;
