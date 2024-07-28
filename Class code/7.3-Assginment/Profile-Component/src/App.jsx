import { useRecoilState } from "recoil";
import { useEffect } from "react";
import ProfileComponent from "./profilecomponents";
import { profileAtom } from "./store/atom";

function App() {
  const [profile, setProfile] = useRecoilState(profileAtom);

  useEffect(() => {
    setProfile((old) => [
      ...old,
      {
        profileImg:
          "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
        name: "Sinu Lata Nayak",
        age: 22,
        location: "India",
        followers: "101k",
        likes: "2M",
        photos: "2.9k",
      },
    ]);
  }, []);

  return profile.map((each) => {
    return (
      <ProfileComponent
        key={profile.indexOf(each)}
        profile={each}
      ></ProfileComponent>
    );
  });
}

export default App;
