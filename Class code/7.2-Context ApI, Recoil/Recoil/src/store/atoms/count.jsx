import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom", //unique key for atom using this key we identify this atom it must be unique
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom); //get is a function that computes the value of the selector. It receives an argument (often called get) that allows us to read other atoms or selectors.
    return count % 2 === 0;
  },
});
