import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid"

export const fetchFeedbacks = createAsyncThunk(
    'feedbacks/fetchFeedbacks',
    async function(_, {rejectWithValue}) {
        try {
            const res = await fetch("https://fake-server-feedbacks.herokuapp.com/productRequests");
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

export const newFeedback = createAsyncThunk(
    "feedbacks/newFeedback",
    async function({title, description, category}, {rejectWithValue, dispatch}) {
        try {
            const feedback = {
                id: v4(),
                title,
                category,
                description,
                upvotes: 0,
                isUpvoted: false,
                status: "suggestions",
                comments: []
            }
            const res = await fetch("https://fake-server-feedbacks.herokuapp.com/productRequests", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback)
            })

            if(!res.ok) {
                throw new Error("Server Error!")
            }

            dispatch(addFeedback(feedback))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const newReply = createAsyncThunk(
    "feedbacks/newReply",
    async function({id, content}, {rejectWithValue}) {
        try {
            const res = fetch(`https://fake-server-feedbacks.herokuapp.com/productRequests/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                })
            })
        } catch (error) {
            
        }
    }
)

const feedbackSlice = createSlice({
    name: "feedbacks",
    initialState: {
        feedbacks: [],
        status: null,
        error: null,
    },

    reducers: {
        addFeedback(state, action) {
            state.feedbacks.push(action.payload)
        },
    },

    extraReducers: {
        [fetchFeedbacks.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchFeedbacks.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.feedbacks = action.payload; 
        },
        [fetchFeedbacks.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload
        },
        [newFeedback.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload
        },
    }
})

const {addFeedback} = feedbackSlice.actions;

export default feedbackSlice.reducer;