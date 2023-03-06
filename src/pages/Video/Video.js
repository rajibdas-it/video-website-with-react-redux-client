import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../../Components/Error";
import Loading from "../../Components/Loading";
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

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <Error>{error}</Error>;
  }
  if (!isLoading && !isError && !video?.id) {
    content = <Error>{"no video found"}</Error>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer video={video} />
          <VideoDescriptions video={video} />
        </div>
        <RelatedVideos video={video} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
