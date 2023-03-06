import axiosInstance from "../../ulits/baseURL";

const getVideos = async () => {
  const res = await axiosInstance.get("/videos");
  return res.data;
};

export default getVideos;
