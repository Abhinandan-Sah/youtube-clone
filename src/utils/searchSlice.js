import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        searchQuery: null,
    },
    reducers: {
        cacheResults: (state, action) =>{
            state = Object.assign(state, action.payload);
        },
        addSearchQuery: (state, action) =>{
            state.searchQuery = action.payload
        }
    },

});

export const {cacheResults, addSearchQuery} = searchSlice.actions;

export default searchSlice.reducer;