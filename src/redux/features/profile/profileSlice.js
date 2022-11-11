import { createSlice } from "@reduxjs/toolkit";

const profileState={
    profileId:"",
    name:"",
    email:"",
    // image:"",
    followers:0,
    playlists:[],
}

export const profileSlice=createSlice({
    name:"profile",
    initialState:profileState,
    reducers:{
        setProfileID:(state,action)=>{
            state.profileId=action.payload;
        },
        setName:(state,action)=>{
            state.name=action.payload;
        },
        setEmail:(state,action)=>{
            state.email=action.payload;
        },
        setFollowers:(state,action)=>{
            state.followers=action.payload;
        },
        setPlayliststoZero:(state)=>{
            state.playlists=[];
        },
        setPlaylists:(state,action)=>{
            state.playlists.push(action.payload);
        }
    }
})

export const {setProfileID, setName, setEmail, setFollowers, setPlayliststoZero, setPlaylists} =profileSlice.actions;
export default profileSlice.reducer;