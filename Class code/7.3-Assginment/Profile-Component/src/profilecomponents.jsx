export default function ProfileComponent({ profile }) {
  return (
    <div
      style={{
        height: "500px",
        width: "400px",
        border: "1px solid black",
        padding: "10px",
        margin: "30px",
      }}
    >
      <div
        style={{
          height: "180px",
          width: "100%",
          backgroundImage:
            "url('https://st5.depositphotos.com/35914836/63547/i/450/depositphotos_635479512-stock-photo-brown-wooden-wall-texture-background.jpg')",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            height: "130px",
            borderRadius: "50%",
            marginTop: "20%",
          }}
          src={profile.profileImg}
          alt="Profile Img"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          borderBottom: "2px solid black",
        }}
      >
        <h2 style={{ margin: "0", padding: "0" }}>
          {profile.name}
          <span
            style={{
              marginLeft: "10px",
              fontSize: "20px",
              fontWeight: "normal",
              color: "gray",
            }}
          >
            {profile.age}
          </span>
        </h2>
        <p style={{ marginTop: "20px", fontSize: "20px", color: "gray" }}>
          {profile.location}
        </p>
        {/* <p style={{ margin: "0", padding: "3px" }}>{profile.age}</p> */}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: "10px" }}>{profile.followers}</h2>
          <p style={{ margin: "0", color: "gray" }}>Followers</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: "10px" }}>{profile.likes}</h2>
          <p style={{ margin: "0", color: "gray" }}>Likes</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: "10px" }}>{profile.photos}</h2>
          <p style={{ margin: "0", color: "gray" }}>Photos</p>
        </div>
      </div>
    </div>
  );
}
