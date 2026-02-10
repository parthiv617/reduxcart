import { configureStore } from "@reduxjs/toolkit";
import WishlistSliceReducer from "./slices/WishlistSlice";
import productSliceReducer from "./slices/productslices"
import cartSliceReducer from "./slices/cartSlice"
const store = configureStore({
  reducer: {
    cartReducer:cartSliceReducer,
    productReducer: productSliceReducer,
    wishlistReducer: WishlistSliceReducer,
  },
});

export default store;