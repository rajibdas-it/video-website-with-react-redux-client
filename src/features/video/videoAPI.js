import axiosInstance from "../../ulits/baseURL";

const getVideo = async (id) => {
  const res = await axiosInstance.get(`videos/${id}`);
  return res.data;
};

export default getVideo;
