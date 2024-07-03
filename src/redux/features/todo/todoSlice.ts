import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TTodo {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: "Low" | "Medium" | "High";
}

export type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      // Step 1: Toggle the isCompleted status
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

      // Step 2: Separate the todos into pending and completed
      const pendingTodos = updatedTodos.filter((todo) => !todo.isCompleted);
      const completedTodos = updatedTodos.filter((todo) => todo.isCompleted);

      // Step 3: Concatenate pending and completed todos
      state.todos = [...pendingTodos, ...completedTodos];
    },
  },
});

export const selectTodos = (state: RootState) => state.todos.todos;

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
