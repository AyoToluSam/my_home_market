import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface CartItem {
  id: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  cartItems: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const cartItems = state.cartItems;

      if (!cartItems?.length) {
        state.cartItems = [{ id, quantity: 1 }];
      } else if (!cartItems.find((item) => item.id === id)) {
        state.cartItems = [...cartItems, { id, quantity: 1 }];
      } else {
        state.cartItems = cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const cartItems = state.cartItems;

      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        state.cartItems = cartItems.filter((item) => item.id !== id);
      } else {
        state.cartItems = cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    removeAll: (state) => {
      state.cartItems = [];
    },
  },
});

export const selectIsOpen = (state: RootState) => state.cart.isOpen;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartQuantity = (state: RootState) =>
  state.cart.cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

export const selectItemQuantity = (id: string) => (state: RootState) =>
  state.cart.cartItems?.find((item) => item.id === id)?.quantity || 0;

export const {
  openCart,
  closeCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
  removeAll,
} = cartSlice.actions;

export default cartSlice;
