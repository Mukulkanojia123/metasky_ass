import { configureStore } from "@reduxjs/toolkit";
// import appSlice from "./appSlice";
// import LoginSlice from "./LoginSlice";
// import DCart from "./DCart";
import SearchSlice from "./SearchSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer : {
        search : SearchSlice,
        user : userSlice
    }
})

export default store;