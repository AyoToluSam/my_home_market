import { configureStore } from "@reduxjs/toolkit";
import paystackApi from "../api/paystackApi";
import { productsApi } from "../api/productsApi";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [paystackApi.reducerPath]: paystackApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      paystackApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
