import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../features/relatedVideos/relatedVideosSlice";
import Error from "./Error";
import Loading from "./Loading";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ video }) => {
  const { id, tags } = video;
  // console.log(id);
  // console.log(tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id, tags }));
  }, [dispatch, id, tags]);

  const { isLoading, isError, error, relatedVideos } = useSelector(
    (state) => state.relatedVideos
  );

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error>{error}</Error>
      ) : relatedVideos.length > 0 ? (
        relatedVideos.map((relVideo) => (
          <RelatedVideo key={relVideo.id} relVideo={relVideo} />
        ))
      ) : null}
    </div>
  );
};

export default RelatedVideos;
