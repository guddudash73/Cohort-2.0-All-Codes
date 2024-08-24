import { useEffect, useState } from "react";
import axios from "axios";

function useTodo(n) {
  //creating a custom hook
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = () => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  };

  useEffect(() => {
    const interval = setInterval(data, n * 1000); // This will run the data function in n*1000 interval

    data(); //this is for calling the function for the first time

    return () => {
      clearInterval(interval); // This return will only be executed when useEffect() runs more than once. The code inside the return block will execute during the cleanup phase of the first execution, and subsequent executions will occur during the second iteration of useEffect.
    };
  }, [n]);

  return { todos, loading };
}

export function DataFetchingHook() {
  const { todos, loading } = useTodo(5); //using that hook we created

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}
