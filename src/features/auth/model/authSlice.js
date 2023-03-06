import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    tokens:{
        access_token:'',
        refresh_token:'',
    }
}

export const authSlice = createSlice({
    name:'authToken',
    initialState,
    reducers:{
        setToken(state,action){
            state.tokens.access_token = action.payload.access_token
            state.tokens.refresh_token= action.payload.refresh_token

        },
    }
})
export const {setToken} = authSlice.actions

