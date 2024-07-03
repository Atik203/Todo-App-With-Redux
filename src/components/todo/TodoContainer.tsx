import { selectTodos } from "@/redux/features/todo/todoSlice";
import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const todos = useAppSelector(selectTodos);
  return (
    <div>
      <div className="mx-auto my-5 text-center space-x-16">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl mx-auto p-10 space-y-5">
        {todos.length === 0 && (
          <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-center gap-5">
            <p className="font-semibold text-2xl">There is no task </p>
          </div>
        )}

        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
