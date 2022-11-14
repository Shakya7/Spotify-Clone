import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const playListState={
    fetching:false,
    status:"",
    playlistId:"",
    images:[],
    name:"",
    followers:0,
    color:"",
    snapshot_ID:"",
    description:"",
    tracks:[],
    nextPageURL:"",
    total_tracks:0,
    error:""
}

//id and token can be passed as arguments while dispatching fetchPlaylistData(_,_)

export const fetchPlaylistData=createAsyncThunk("playlist/fetchPlaylistData",async({id,token},{rejectWithValue})=>{
    console.log("The id is ",id);
    console.log("Token is ",token);
    try{
        const data=await axios.get(`https://api.spotify.com/v1/playlists/${id}`,{
            headers: {
                Authorization: "Bearer "+ token,
                "Content-Type": "application/json"
            }
        });
        return data.data;
    }catch(err){
        
        //****** in REDUX-THUNK error handling, rejectwithValue is used as used *//
        return rejectWithValue(err.message);
    }
})

export const playlistSlice=createSlice({
    name:"playlist",
    initialState:playListState,
    extraReducers:(builder)=>{
        builder.addCase(fetchPlaylistData.pending,(state)=>{
            state.status="pending"
            state.fetching=true;

        });
        builder.addCase(fetchPlaylistData.fulfilled, (state,action)=>{

            //setting tracks
            state.tracks=action.payload.tracks.items;

            //setting playlist id
            state.playlistId=action.payload.id;

            //setting playlist name
            state.name=action.payload.name;

            //setting the playlist followers
            state.followers=action.payload.followers.total;

            //setting the snapshot id
            state.snapshot_ID=action.payload.snapshot_id;

            //setting the description
            state.description=action.payload.description;

            //setting the total tracks
            state.total_tracks=action.payload.tracks.total

            //*****setting fetching flag to FALSE*****//
            state.fetching=false;

            //setting status
            state.status="resolved"
    
        });
        builder.addCase(fetchPlaylistData.rejected, (state,action)=>{
            state.status="rejected"
            state.error=action.payload;
            state.fetching=false;

        
        })
    }

});

export default playlistSlice.reducer;