import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TTodo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
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
  },
});

export const selectTodos = (state: RootState) => state.todos.todos;

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
