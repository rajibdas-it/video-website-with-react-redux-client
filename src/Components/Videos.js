import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/videos/videosSlice";
import Error from "./Error";
import Loading from "./Loading";
import Video from "./Video";

const Videos = () => {
  const { videos, error, isLoading, isError } = useSelector(
    (state) => state.videos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error>{error}</Error>;
  }
  if (!isLoading && !isError && videos.length === 0) {
    content = <Error>{`No Videos Found`}</Error>;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default Videos;
