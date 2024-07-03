import { configureStore, Reducer } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import todoReducer, { TInitialState } from "./features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todos: todoReducer as Reducer<TInitialState>,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
