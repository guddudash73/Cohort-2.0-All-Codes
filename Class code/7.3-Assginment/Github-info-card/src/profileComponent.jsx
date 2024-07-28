import { githubAtom } from "../../Github-info-card/src/store/atoms";
import { useRecoilValue } from "recoil";
import "./App.css";

export function ProfileComponent() {
  const user = useRecoilValue(githubAtom);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "10px",
        width: "500px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "120px",
          width: "500px",
          backgroundColor: "aqua",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <a
          style={{ paddingTop: "10px", position: "relative", left: "198px" }}
          href={user.html_url}
          target="_blank"
        >
          Visit Profile
        </a>
        <img
          style={{ height: "100px", borderRadius: "50%", marginTop: "25px" }}
          src={user.avatar_url}
          alt="Profile Image"
        />
      </div>
      <p style={{ paddingTop: "60px", fontWeight: "bolder" }}>@{user.login}</p>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-evenly",
          borderTop: "1px solid black",
          margin: "50px",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>Followers</p>
          <p
            style={{
              paddingTop: "15px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {user.followers}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>Following</p>
          <p
            style={{
              paddingTop: "15px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {user.following}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>Public Repos</p>
          <p
            style={{
              paddingTop: "15px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {user.public_repos}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>Public Gists</p>
          <p
            style={{
              paddingTop: "15px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {user.public_gists}
          </p>
        </div>
      </div>
    </div>
  );
}
