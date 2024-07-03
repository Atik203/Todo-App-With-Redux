import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todo/todoSlice";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  //* From Local Redux Store
  // const todos = useAppSelector(selectTodos);

  //* From API

  const { data, isLoading, isError } = useGetTodosQuery(undefined);
  const todos = data?.data;
  if (isLoading)
    return <p className="text-center text-2xl font-bold">Loading...</p>;

  if (isError) return <p className="text-center text-2xl font-bold">Error</p>;

  return (
    <div>
      <div className="mx-auto my-5 text-center space-x-16">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl mx-auto p-10 space-y-5">
        {todos.length !== 0 ? (
          todos.map((todo: TTodo) => <TodoCard key={todo.id} todo={todo} />)
        ) : (
          <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-center gap-5">
            <p className="font-semibold text-2xl">There is no task </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
