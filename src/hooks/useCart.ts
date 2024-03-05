import { useState } from "react";
import { CartItem, MenuItem } from "@/types";

export const useCart = (id?: string) => {
  const sessionStorageId = `cartItems-${id}`;
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    JSON.parse(sessionStorage.getItem(sessionStorageId) || "[]")
  );

  const addToCartHandler = (item: MenuItem) =>
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex((index) => index._id === item._id);

      let newCartItems;

      if (itemIndex === -1) {
        newCartItems = [...prevState, { ...item, quantity: 1 }];
      } else {
        newCartItems = prevState.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      sessionStorage.setItem(sessionStorageId, JSON.stringify(newCartItems));

      return newCartItems;
    });

  const removeFromCartHandler = (id: string) => {
    setCartItems((prevState) => {
      const newCartItems = prevState.filter((item) => item._id !== id);

      sessionStorage.setItem(sessionStorageId, JSON.stringify(newCartItems));

      return newCartItems;
    });
  };

  return {
    cartItems,
    addToCartHandler,
    removeFromCartHandler,
  };
};
