import React from "react";

const VideoPlayer = ({ video }) => {
  console.log(video);
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={video?.link}
      title={video?.title}
      frameborder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default VideoPlayer;
