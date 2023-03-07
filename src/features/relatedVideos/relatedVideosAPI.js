import axiosInstance from "../../ulits/baseURL";

const getRelatedVideos = async ({ id, tags }) => {
  // `/videos?tags_like=react&tags_like=tips&id_ne=${id}&_limit=5`
  const limit = 5;
  let queryStirng =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const res = await axiosInstance(`/videos?${queryStirng}`);
  return res.data;
};

export default getRelatedVideos;
