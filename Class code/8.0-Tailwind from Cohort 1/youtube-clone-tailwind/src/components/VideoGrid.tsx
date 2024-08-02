import { VideoCard } from "./VideoCard";

const Videos = [
  {
    title: "How to learn coading | 30 day plan | Code with me",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Guddu Dash",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "Jawan: Chaleya by Arijit singh | Shahrukh Khan",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Guddu Dash",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "Get started with me | 30 days challenge",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Guddu Dash",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
  {
    title: "How to make money | In 1 Day",
    thumbnail: "photo.jpg",
    profileImg: "profile.jpg",
    author: "Chutiya Youtuber",
    views: "400k",
    timestamp: "5 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {Videos.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            thumbnail={video.thumbnail}
            profileImg={video.profileImg}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
