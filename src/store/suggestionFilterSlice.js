import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSuggestionsFilters = createAsyncThunk(
    'suggestionsFilters/fetchSuggestionsFilters',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch("https://fake-server-feedbacks.herokuapp.com/suggestionFilter");
            if(!res.ok) {
                throw new Error("Server Error!")
            }
            const data = await res.json()
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const suggestionFilterSlice = createSlice({
    name: "suggestionsFilters",
    initialState: {
        suggestionsFilters: [],
        status: null,
        error: null,
    },

    reducers: {
        
    },

    extraReducers: {
        [fetchSuggestionsFilters.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchSuggestionsFilters.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.suggestionsFilters = action.payload; 
        },
        [fetchSuggestionsFilters.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload
        },
    }
})


export default suggestionFilterSlice.reducer;