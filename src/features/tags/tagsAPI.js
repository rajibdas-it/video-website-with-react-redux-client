import axiosInstance from "../../ulits/baseURL";

const getTags = async () => {
  const res = await axiosInstance.get("/tags");
  return res.data;
};

export default getTags;
