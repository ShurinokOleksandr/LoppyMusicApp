import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "@lp/features/auth";


export const store = configureStore({
    reducer:{
        authSlice:authSlice.reducer
    }
})