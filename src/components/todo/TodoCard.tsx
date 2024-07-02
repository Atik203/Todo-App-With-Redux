import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-center gap-5">
      <input type="checkbox" name="" className="" />
      <p className="font-semibold text-xl">Todo Title</p>
      <p className="text-lg">description</p>
      <div className="space-x-2">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default TodoCard;
