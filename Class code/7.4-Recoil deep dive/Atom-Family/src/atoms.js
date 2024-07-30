import { atom, atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  //using atomFamily we can assgin separate atoms to our components so that it will only rerender components that changes
  key: "todosAtomFamily",
  default: (id) => {
    //atom family expects a function with a parameter
    return TODOS.find((x) => x.id === id); //performing find operation and returns the object which meets the argument
  },
});

export const todosAtom = atom({
  key: "todosAtom",
  default: TODOS, // defining todos using atom this will also work but the problem is it will rerender all todo components on change of one component
});
