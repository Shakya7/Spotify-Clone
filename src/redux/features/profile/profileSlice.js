import { createSlice } from "@reduxjs/toolkit";

const profileState={
    profileId:"",
    name:"",
    email:"",
    // image:"",
    playlists:[],
    status:"",
    error:""
}

// export const loadProfileState=createAsyncThunk("profile/loadProfileState",async({token},{rejectWithValue})=>{
//     try{
//         const data=await axios.get("https://api.spotify.com/v1/browse/new-releases",{
//             headers: {
//             Authorization: "Bearer "+ token,
//             "Content-Type": "application/json"
//             }
//         });
//         return data.data.albums;
//     }catch(err){
//         return rejectWithValue(err.message);
//     }

// });

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
        setPlayliststoZero:(state)=>{
            state.playlists=[];
        },
        setPlaylists:(state,action)=>{
            state.playlists.push(action.payload);
        }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchNewReleases.pending,(state)=>{
    //         state.status="pending"
    //     })

    //     builder.addCase(fetchNewReleases.fulfilled,(state,action)=>{
    //         state.newReleases=[];
    //         state.newReleases=action.payload.items;
    //         state.status="fulfilled"
    //     })

    //     builder.addCase(fetchNewReleases.rejected,(state,action)=>{
    //         state.error=action.payload;
    //         state.status="rejected";
    //     })
    // }
})

export const {setProfileID, setName, setEmail, setPlayliststoZero, setPlaylists} =profileSlice.actions;
export default profileSlice.reducer;