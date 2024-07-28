import { atom } from "recoil";

export const profileAtom = atom({
  key: "profileAtom",
  default: [
    {
      profileImg:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
      name: "Guddu Dash",
      age: 23,
      location: "India",
      followers: "80k",
      likes: "803k",
      photos: "1.4k",
    },
  ],
});
