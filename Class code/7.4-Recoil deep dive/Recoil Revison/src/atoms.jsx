import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom", //Defining atom
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 35,
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 0,
});

//Defining selector
export const totalNotificationSelector = selector({
  key: "totalNotificationCount",
  get: ({ get }) => {
    //get is a function that computes the value of selector it recives an argument called get which help us to retrive values from other attom or selectors
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom); //Retrieve the atom values, perform calculations, and return the result
    const notificationAtomCount = get(notificationAtom);
    const messagesAtomCount = get(messagesAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationAtomCount +
      messagesAtomCount
    );
  },
});
