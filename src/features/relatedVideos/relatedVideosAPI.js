import axiosInstance from "../../ulits/baseURL";

const getRelatedVideos = async ({ id, tags }) => {
  const res = await axiosInstance.get(
    `/videos?tags_like=react&tags_like=tips&id_ne=${id}`
  );
  return res.data;
};

export default getRelatedVideos;
