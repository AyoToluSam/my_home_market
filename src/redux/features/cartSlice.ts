// redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLocalStorage } from '@/utilities/useLocalStorage';

interface CartItem {
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
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state) => {
      const [storedItems] = useLocalStorage('Shopping Cart', []);
      state.cartItems = storedItems || [];
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ id: action.payload, quantity: 1 });
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        } else {
          item.quantity--;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    removeAll: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  openCart,
  closeCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
  removeAll,
  initializeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
