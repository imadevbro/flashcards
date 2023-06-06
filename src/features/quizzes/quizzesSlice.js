import { createSlice} from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const addQuizToTopic = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({quizId: payload.id, topicId: payload.topicId }));
    }
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;