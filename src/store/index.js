import {configureStore} from "@reduxjs/toolkit";
import authSlice from "@lp/features/auth/model/authSlice";


export const store = configureStore({
    reducer:{
        authSlice:authSlice
    }
})