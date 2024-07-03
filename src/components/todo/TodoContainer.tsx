import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="mx-auto my-5 text-center space-x-5">
        <Button className="bg-primary-gradient">Add Todo</Button>
        <Button className="bg-primary-gradient">Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl mx-auto p-10 space-y-5">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        {/* <div className="p-8 bg-white mx-auto rounded-md flex items-center justify-center gap-5">
          <p className="font-semibold text-2xl">There is no task </p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;