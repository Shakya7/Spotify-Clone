import {createSlice} from "@reduxjs/toolkit";

const loginState={
    isLoggedin: false,
    token: ""
}

export const loginSlice=createSlice({
    name:"login",
    initialState:loginState,
    reducers:{
        setToken: (state,action)=>{
            state.token=action.payload;
        },
        setLoggedIn: (state)=>{
            state.isLoggedin=true;
        }
    }
})

export const {setToken, setLoggedIn} =loginSlice.actions;
export default loginSlice.reducer;
