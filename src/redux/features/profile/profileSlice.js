import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const profileState={
    profileId:"",
    name:"",
    email:"",
    // image:"",
    followers:0,
    playlists:[],
    status:"",
    newReleases:[],
    error:""
}

export const fetchNewReleases=createAsyncThunk("profile/fetchNewReleases",async({token},{rejectWithValue})=>{
    try{
        const data=await axios.get("https://api.spotify.com/v1/browse/new-releases",{
            headers: {
            Authorization: "Bearer "+ token,
            "Content-Type": "application/json"
            }
        });
        return data.data.albums;
    }catch(err){
        return rejectWithValue(err.message);
    }

});

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
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNewReleases.pending,(state)=>{
            state.status="pending"
        })

        builder.addCase(fetchNewReleases.fulfilled,(state,action)=>{
            state.newReleases=[];
            state.newReleases=action.payload.items;
            state.status="fulfilled"
        })

        builder.addCase(fetchNewReleases.rejected,(state,action)=>{
            state.error=action.payload;
            state.status="rejected";
        })
    }
})

export const {setProfileID, setName, setEmail, setFollowers, setPlayliststoZero, setPlaylists} =profileSlice.actions;
export default profileSlice.reducer;