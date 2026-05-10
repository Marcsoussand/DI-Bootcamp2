import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    count: 0, 
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count ++;   
        },
        decrement: (state) => {
            state.count --;
        },
        addInputValue: (state, action) => {
            state.count += action.payload;
        }
    }
});
export default counterSlice.reducer;
export const { increment, decrement, addInputValue } = counterSlice.actions;