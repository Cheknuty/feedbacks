import { configureStore } from "@reduxjs/toolkit"; 
import feedbackReducer from "./feedbackSlice";
import suggestionFilterReducer from "./suggestionFilterSlice";

export default configureStore({
    reducer: {
        feedbacks: feedbackReducer,
        suggestionsFilters: suggestionFilterReducer
    }
}) 