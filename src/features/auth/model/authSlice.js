import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    token:''
}

export const authSlice = createSlice({
    name:'authToken',
    initialState,
    reducers:{
        setToken(state,action){
            state.token = action.payload.token
        },
    }
})
export const {setToken} = authSlice.actions
export default authSlice.reducer
