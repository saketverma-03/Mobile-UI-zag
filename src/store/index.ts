/* Containse Store */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

// exporting all things in /store dir from index file
// do not need to import from any other files from /store dir
export { toogleFav } from "./productsSlice";
export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
