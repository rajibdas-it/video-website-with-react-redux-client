import React from "react";
import RelatedVideos from "../../Components/RelatedVideos";
import VideoDescriptions from "../../Components/VideoDescriptions";
import VideoPlayer from "../../Components/VideoPlayer";

const Video = () => {
  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          <div class="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer />

            <VideoDescriptions />
          </div>

          {/* <!-- related videos --> */}
          <RelatedVideos />
        </div>
      </div>
    </section>
  );
};

export default Video;
