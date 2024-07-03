import { TTodo } from "@/redux/features/todo/todoSlice";
import { Button } from "../ui/button";
import EditIcon from "./../ui/EditIcon";
import TrashIcon from "./../ui/TrashIcon";

const TodoCard = ({ todo }: { todo: TTodo }) => {
  const { title, description } = todo;

  return (
    <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-center gap-5">
      <input type="checkbox" name="" className="" />
      <p className="font-semibold text-xl">{title}</p>
      {/* <p className="text-lg">Time</p> */}
      <p className="text-lg">{description}</p>
      <div className="space-x-2">
        <Button className="bg-purple-500">
          <EditIcon />
        </Button>
        <Button className="bg-red-500">
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
