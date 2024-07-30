import { atomFamily, selectorFamily } from "recoil";

import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    //using selectorFamily under the atomFamily
    key: "todoSelectorFamily",
    get:
      // selectorFamily get requires a get like the atomFamily under this we can call our async function to fetch the data

        (id) =>
        async ({ get }) => {
          // This is our async function where we can perform our async tasks
          const res = await axios.get(
            `https://sum-server.100xdevs.com/todo?id=${id}`
          );
          return res.data.todo; //Returning the data recived from the API Call
        },
  }),
});
