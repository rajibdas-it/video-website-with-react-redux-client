import React from "react";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ video }) => {
  const { id, tags } = video;
  console.log(id);
  console.log(tags);
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <RelatedVideo />
    </div>
  );
};

export default RelatedVideos;
