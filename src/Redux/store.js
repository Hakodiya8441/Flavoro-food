import {configureStore} from "@reduxjs/toolkit" ;
import CartSlice from "./Slices/CartSlice";
import CategorySlice from "./Slices/CategorySlice";
import searchSlice from "./Slices/searchSlice";



const store = configureStore({
    reducer:{
        cart: CartSlice,
        category:CategorySlice,
        search:searchSlice,
    },
});

export default store;