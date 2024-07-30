import axios from "axios";
import { atom, selector } from "recoil";

//Async Data Queries
export const notifications = atom({
  // This atom uses API call to define its default value and the api call is async, and we cant do an async operation in atom but we can perform the same in the selector
  key: "networkAtom",
  default: selector({
    //defining a selector as the default value
    key: "networkAtomSelector",
    get: async () => {
      //using the async function in the get of selector because get can receive a function
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data; //Returning the value we get from the axios call
    },
  }),
});

// export const notifications = atom({
//   key: "networkAtom", //This atom don't have any async operations
//   default: {
//     network: 0,
//     jobs: 0, //default values are hard coded
//     messaging: 0,
//     notifications: 0,
//   },
// });

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
