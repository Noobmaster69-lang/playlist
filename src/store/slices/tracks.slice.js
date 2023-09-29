import { createSlice } from '@reduxjs/toolkit';

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState: [],
    reducers: {
        setTracksSlice: (state, action) => action.payload,
        addTrack: (state, action) =>{ 
        const obj = {
            id: action.payload
        }
        return [ ...state, obj ]
     },
     deleteTrack: (state, action) => state.filter(track => track.id !== action.payload )
    }
})

export const { setTracksSlice, addTrack, deleteTrack } = tracksSlice.actions;

export default tracksSlice.reducer;
