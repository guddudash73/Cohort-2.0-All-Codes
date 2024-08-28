function App() {
  return (
    <>
      <Todo name="guddu" age={20}></Todo>
    </>
  );
}

interface User {
  name: string;
  age: number;
}

function Todo({ name, age }: User) {
  //we can use interface in react like this and do type checking in react using typescript
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </>
  );
}

export default App;
