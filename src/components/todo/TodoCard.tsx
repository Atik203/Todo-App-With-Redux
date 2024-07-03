import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todo/todoSlice";
import { useState } from "react";
import { Button } from "../ui/button";
import EditIcon from "./../ui/EditIcon";
import TrashIcon from "./../ui/TrashIcon";
import EditTodoModal from "./EditTodoModal";

const TodoCard = ({ todo }: { todo: TTodo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { title, description, _id, isCompleted, priority } = todo;

  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleComplete = () => {
    const options = {
      id: _id,
      data: {
        isCompleted: !isCompleted,
        title,
        description,
        priority,
      },
    };

    updateTodo(options);
  };

  return (
    <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-between gap-4">
      <input
        onClick={handleComplete}
        type="checkbox"
        name="toggleTodo"
        defaultChecked={isCompleted}
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
        <Button onClick={() => setIsModalOpen(true)} className="bg-purple-500">
          <EditIcon />
        </Button>
        {isModalOpen && (
          <EditTodoModal
            todo={todo}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}

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
