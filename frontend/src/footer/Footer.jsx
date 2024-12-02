import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // You can use icons for social media

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
 
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; Cảm ơn đã ghé thăm. Hẹn Gặp Lại!</p>
        </div>
        <div className="footer-center">
          <div className="footer-links">
            <a href="/ChinhSachBaoMat.html">Privacy Policy</a>
            <a href="/DieuKhoanSuDung.html">Terms of Service</a>
            <a href="/Contact.html">Contact</a>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-images">
  <div className="image-container">
  <a href="/ChinhSachHoanHang.html">
      <p className="image-text">Chính sách hoàn hàng</p>
  
    <img src="/chinhsachhoanhang.webp" alt="Image 1" />  </a> 
  </div>
  <div className="image-container">
  <a href="/Doitac.html">
    <p className="image-text">Trở thành đối tác</p>
    <img src="doitac.webp" alt="Image 2" /></a>
  </div>
  <div className="image-container">
<a href="/Lienheadmin.html">
    <p className="image-text">Liên hệ admin</p>
    <img src="tuvan.webp" alt="Image 3" /></a>
  </div>
  <div className="image-container">
    <a href="/Tuvan.html">
    <p className="image-text">Tư vấn</p>
    <img src="anh4.webp" alt="Image 4" /></a>
  </div>
</div>



    </footer>
  );
};

export default Footer;
