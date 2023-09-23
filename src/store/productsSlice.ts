import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { products } from "./initaldata";
const initialState = products;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toogleFav(state, action: PayloadAction<string>) {
      state.forEach((product) => {
        product.id === action.payload ? (product.isFavorite = true) : false;
      });
    },
  },
});

export const { toogleFav } = productSlice.actions;
export default productSlice.reducer;
