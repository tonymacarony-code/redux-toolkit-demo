import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleCompletedTodo: (state, action) => {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload);
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed;
            }
        },
        removeTodo: (state, action) => {
            const removeTodo = state.todos.filter(todo => todo.id !== action.payload);
            state.todos = removeTodo;
        }
    }
});

export const { addToDo, toggleCompletedTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;