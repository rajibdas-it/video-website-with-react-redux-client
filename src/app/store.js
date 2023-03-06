import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
  },
});
