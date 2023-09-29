import { configureStore } from "@reduxjs/toolkit";
import credentials from './slices/credentials.slice/'
import tracks from './slices/tracks.slice'

export default configureStore({
    reducer: {
        credentials,
        tracks
    }
})