import { useLocalStorage } from "@/utilities/useLocalStorage";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://63f78f6ee8a73b486afaedef.mockapi.io/products"
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const [cartItems, setCartItems] = useLocalStorage("Shopping Cart", []);

  const getItemQuantity = (id) => {
    return cartItems?.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id) => {
    setCartItems((cartItems) => {
      if (!cartItems) {
        return [{ id, quantity: 1 }];
      } else if (cartItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    });
  };

  const decreaseItemQuantity = (id) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const getCartQuantity = () => {
    if (!cartItems) {
      return 0;
    }
    return cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  };

  const cartQuantity = getCartQuantity();

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        removeAll,
        isOpen,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
        data,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
