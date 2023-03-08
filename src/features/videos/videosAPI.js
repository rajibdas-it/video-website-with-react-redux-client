import axiosInstance from "../../ulits/baseURL";

const getVideos = async ({ tags, search }) => {
  let queryString = "";

  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const res = await axiosInstance.get(`/videos/?${queryString}`);
  return res.data;
};

export default getVideos;
