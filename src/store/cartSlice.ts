import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import type { CardItem } from "../types";

const initialState: CardItem[] = [];

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CardItem>) {
      action.payload.id = crypto.randomUUID();
      state.push(action.payload);
    },
    incQuantity(state, action: PayloadAction<string>) {
      state.map((item) =>
        item.id === action.payload ? (item.quantity += 1) : ""
      );
    },
    decQuantity(state, action: PayloadAction<string>) {
      state.map((item) =>
        item.id === action.payload
          ? item.quantity !== 0
            ? (item.quantity -= 1)
            : ""
          : ""
      );
    },
    removeFromCart(state, action: PayloadAction<CardItem["id"]>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, incQuantity, decQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
