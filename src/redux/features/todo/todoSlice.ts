import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TTodo {
  title: string;
  description: string;
  isCompleted?: boolean;
}

type TInitialState = {
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

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
