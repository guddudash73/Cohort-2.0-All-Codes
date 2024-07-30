import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id)); // this will give us both the value and function to update
  //Using Loadable the todo variable will receive a object that contains 2 thing
  {
    /* 
    1. state - it will have the status of our async call
    2. contents - it will have the values of our state variable
     */
  }

  const todo = useRecoilValueLoadable(todosAtomFamily(id)); //this will give us only the variable

  //Checking the Status and returning
  if (todo.state === "loading") {
    return <div>Loading....</div>;
  } else if (todo.state === "hasValue") {
    return (
      // accessing the state values from the content
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    );
  } else if (todo.state === "hasError") {
    return <div>Some error happens while fetching the data from backend</div>;
  }
}

export default App;
