import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import auth from "./auth";
import theme from "./theme";

const store = configureStore({
    reducer: {
       todo,
       auth,
       theme
    }
})

export default store