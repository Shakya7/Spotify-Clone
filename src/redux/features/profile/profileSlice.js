import { createSlice } from "@reduxjs/toolkit";

const profileState={
    profileId:"",
    playlists:[],
}

export const profileSlice=createSlice({
    name:"profile",
    initialState:profileState,
    reducers:{
        setProfileID:(state,action)=>{
            state.profileId=action.payload;
        },
        setPlayliststoZero:(state)=>{
            state.playlists=[];
        },
        setPlaylists:(state,action)=>{
            state.playlists.push(action.payload);
        }
    }
})

export const {setProfileID, setPlayliststoZero, setPlaylists} =profileSlice.actions;
export default profileSlice.reducer;