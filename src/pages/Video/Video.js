import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideos from "../../Components/RelatedVideos";
import VideoDescriptions from "../../Components/VideoDescriptions";
import VideoPlayer from "../../Components/VideoPlayer";
import { fetchVideo } from "../../features/video/videoSlice";

const Video = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
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
