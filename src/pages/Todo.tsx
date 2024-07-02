import TodoContainer from "./../components/todo/TodoContainer.tsx";
import Container from "./../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-2xl my-2 text-center font-semibold">Todo App</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
