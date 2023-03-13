import {configureStore} from "@reduxjs/toolkit";
import authSlice from "@lp/features/auth/model/authSlice"
import {spotifyApi} from "../shared/api/rkt-queries";


export const store = configureStore({
    reducer: {
        authSlice:authSlice,
        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
});
