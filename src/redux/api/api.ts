import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority: string) => {
        const params = new URLSearchParams();
        if (priority) params.append("priority", priority);
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: "/task",
        method: "POST",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    toggleTodo: builder.mutation({
      query: (args: { id: string; isCompleted: boolean }) => ({
        url: `/task/${args.id}`,
        method: "PUT",
        body: { isCompleted: !args.isCompleted },
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoMutation,
} = baseApi;
