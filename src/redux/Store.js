import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice"; // Import only the reducer, not the entire slice
import SearchSlice from "./slices/SearchSlice";
export const Store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice, 
        search : SearchSlice
    }
});
