import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";
import { todosAtom } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <br />
      <br />
      <Todo id={2} />
    </RecoilRoot>
  );
}

//using atomFamily
function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id)); //passing the parameter to atomfamily bassed on the parameter the function gonna create a new atom

  return (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={todo.description}
        onChange={(e) => setTodo(e.target.value)}
      />
    </>
  );
}

//using Atom
// function Todo({ id }) {
//   const [todo, setTodo] = useRecoilState(todosAtom); //this will rerender all the components because all elements shares the same Atom
//   const newTodo = [...todo];
//   let todoIndex = newTodo.findIndex((e) => e.id === id);

//   return (
//     <>
//       <input
//         type="text"
//         value={newTodo[todoIndex].title}
//         onChange={(e) => {
//           const updatedTodo = { ...newTodo[todoIndex], title: e.target.value };
//           const updatedTodoList = [...newTodo];
//           updatedTodoList.splice(todoIndex, 1, updatedTodo);
//           setTodo(updatedTodoList);
//         }}
//       />
//       <br />
//       <input
//         type="text"
//         value={newTodo[todoIndex].description}
//         onChange={(e) => {
//           const updatedTodo = {
//             ...newTodo[todoIndex],
//             description: e.target.value,
//           };
//           const updatedTodoList = [...newTodo];
//           updatedTodoList.splice(todoIndex, 1, updatedTodo);
//           setTodo(updatedTodoList);
//         }}
//       />
//     </>
//   );
// }

export default App;
