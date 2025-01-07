import { apiURL } from "@/constants/variables";
import axios from "axios";

const uploadImage = async (body: any) => {
  const res = await axios.post(`${apiURL}/upload`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export { uploadImage };
