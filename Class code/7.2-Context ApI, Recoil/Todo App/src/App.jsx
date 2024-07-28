import { RecoilRoot, useRecoilValue } from "recoil";
import { CreateTodo } from "./components/Create-Todo";
import { FilterTodo } from "./components/Filter-Todo";
import { filterTodo } from "./store/atoms/todo";
import { Todo } from "./components/Todo";

function App() {
  const allTodo = useRecoilValue(filterTodo);
  return (
    <>
      <CreateTodo></CreateTodo>
      <br />
      <b>Filter the Todos</b>
      <FilterTodo></FilterTodo>
      <br />
      {allTodo.map((todo) => (
        <Todo key={todo.id} item={todo}></Todo>
      ))}
    </>
  );
}

export default App;
