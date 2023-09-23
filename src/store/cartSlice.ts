import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import type { CardItem } from "../types";

const initialState: CardItem[] = [];

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CardItem>) {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
