export function VideoCard(props: any) {
  return (
    <div className="p-2">
      <img className="rounded-xl" src={props.thumbnail} alt="thumbnail" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className="rounded-full " src={props.profileImg} alt="profile" />
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="text-gray-400">{props.author}</div>
          <div className="text-gray-400">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
