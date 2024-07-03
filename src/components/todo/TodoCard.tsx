/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDeleteTodoMutation } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todo/todoSlice";
import { Button } from "../ui/button";
import EditIcon from "./../ui/EditIcon";
import TrashIcon from "./../ui/TrashIcon";

const TodoCard = ({ todo }: { todo: TTodo }) => {
  const { title, description, _id, isCompleted, priority } = todo;

  const [deleteTodo, obejct] = useDeleteTodoMutation();
  const [toggleTodo, object] = useDeleteTodoMutation();

  const handleComplete = () => {
    toggleTodo({ _id, isCompleted });
  };

  return (
    <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-between gap-4">
      <input
        onClick={handleComplete}
        type="checkbox"
        name="toggleTodo"
        className="toggleTodo flex justify-start items-center h-5 w-5 rounded-md"
      />
      <p className="font-semibold">{title}</p>
      {/* <p className="text-lg">Time</p> */}
      <p className="">{description}</p>
      <p
        className={`${priority === "High" ? "text-red-500" : null} 
          ${priority === "Medium" ? "text-yellow-500" : null} 
          ${priority === "Low" ? "text-green-500" : null}
          `}
      >
        {priority}
      </p>
      {isCompleted ? (
        <p className="text-green-500 font-semibold">Completed</p>
      ) : (
        <p className="text-red-500 font-semibold">Pending</p>
      )}
      <div className="space-x-2">
        <Button className="bg-purple-500">
          <EditIcon />
        </Button>
        <Button
          onClick={() => {
            deleteTodo(_id);
          }}
          className="bg-red-500"
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
