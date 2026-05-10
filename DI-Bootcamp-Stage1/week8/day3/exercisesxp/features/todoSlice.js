import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    arrayofTodos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.arrayofTodos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.arrayofTodos = state.arrayofTodos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.arrayofTodos.find((todo) => todo.id === action.payload); 
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});
export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;