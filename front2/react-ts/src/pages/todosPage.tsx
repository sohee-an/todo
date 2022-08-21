import Todos from "../components/Todos";
import Todo from "../models/todo";

function TodosPage() {
  const todos = [
    new Todo("자바스크립트 공부하기", "1"),
    new Todo("타입스크립트 공부하기", "2"),
  ];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default TodosPage;
