import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import profileReducer from "./features/profile/profileSlice";
import playlistReducer from "./features/playlist/playlistSlice";

export const store=configureStore({
    reducer:{
        login:loginReducer,
        profile:profileReducer,
        playlist:playlistReducer
    }
})

