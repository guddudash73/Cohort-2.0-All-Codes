import { atom, selector } from "recoil";
export const todo = atom({
  key: "todoAtom",
  default: [
    {
      id: 1,
      title: "Go to gym",
      desc: "goto gym and exersise for 5 min",
      completed: false,
    },
  ],
});

export const dropFilter = atom({
  key: "dropfilter",
  default: "All Todo",
});

export const searchFilter = atom({
  key: "searchFilter",
  default: "",
});

export const filterTodo = selector({
  key: "filterTodo",
  get: ({ get }) => {
    const allTodo = get(todo);
    const search = get(searchFilter);
    const filter = get(dropFilter);

    const finalList = allTodo.filter(
      (todo) =>
        todo.desc.toLowerCase().includes(search.toLowerCase()) ||
        todo.title.toLowerCase().includes(search.toLowerCase())
    );

    switch (filter) {
      case "Completed":
        return finalList.filter((todo) => todo.completed);
      case "Incompleted":
        return finalList.filter((todo) => !todo.completed);
      default:
        return finalList;
    }
  },
});
