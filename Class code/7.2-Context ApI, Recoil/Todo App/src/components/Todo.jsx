import { useRecoilState } from "recoil";
import { todo } from "../store/atoms/todo";

export function Todo({ item }) {
  const [todoList, setTodo] = useRecoilState(todo);
  const indexToRemove = todoList.findIndex((todo) => todo === item);
  function removeFromTodo() {
    setTodo(() => {
      const newTodo = [...todoList];
      newTodo.splice(indexToRemove, 1);
      return newTodo;
    });
  }

  function markAsDone() {
    setTodo(() => {
      const newTodo = [...todoList];
      if (newTodo[indexToRemove].completed) {
        newTodo[indexToRemove] = {
          ...newTodo[indexToRemove],
          completed: false,
        };
        return newTodo;
      } else {
        newTodo[indexToRemove] = {
          ...newTodo[indexToRemove],
          completed: true,
        };
        return newTodo;
      }
    });
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        gap: "10px",
      }}
    >
      <div
        style={{ border: "1px solid black", padding: "5px", width: "500px" }}
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>{item.id}</p>
        {/* {console.log(item.completed)} */}
      </div>
      <button onClick={removeFromTodo}>X</button>
      <input type="checkbox" onChange={markAsDone} />
    </div>
  );
}
