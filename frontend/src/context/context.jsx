// context.jsx
import { createContext, useContext, useState } from 'react';

// Tạo CartContext
const CartContext = createContext();

// Tạo CartProvider để cung cấp state và setter cho toàn bộ ứng dụng
export function CartProvider({ children }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Hàm toggle để thay đổi trạng thái
  const toggleCartVisibility = () => {
    setIsCartVisible(prev => !prev);
  };

  return (
    <CartContext.Provider value={{ isCartVisible, setIsCartVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook để sử dụng Context trong các component khác
export function useCart() {
  return useContext(CartContext);
}
