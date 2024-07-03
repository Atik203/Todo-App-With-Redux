import { removeTodo, toggleTodo, TTodo } from "@/redux/features/todo/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import EditIcon from "./../ui/EditIcon";
import TrashIcon from "./../ui/TrashIcon";

const TodoCard = ({ todo }: { todo: TTodo }) => {
  const { title, description, id, isCompleted } = todo;
  const dispatch = useAppDispatch();

  const handleComplete = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-center gap-5">
      <input
        onClick={handleComplete}
        type="checkbox"
        name="toggleTodo"
        className="toggleTodo"
      />
      <p className="font-semibold text-xl">{title}</p>
      {/* <p className="text-lg">Time</p> */}
      <p className="text-lg">{description}</p>
      {isCompleted ? (
        <p className="text-lg text-green-500 font-semibold">Completed</p>
      ) : (
        <p className="text-lg text-red-500 font-semibold">Pending</p>
      )}
      <div className="space-x-2">
        <Button className="bg-purple-500">
          <EditIcon />
        </Button>
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
