import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todo } from "../store/atoms/todo";

let id = 2;
function idUpdate() {
  return id++;
}

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const setTodo = useSetRecoilState(todo);

  function addTodo() {
    setTodo((todo) => [
      ...todo,
      {
        id: idUpdate(),
        title,
        desc,
        completed: false,
      },
    ]);
    setTitle("");
    setDesc("");
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo Title"
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      />
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
