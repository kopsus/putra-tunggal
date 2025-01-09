import { apiURL } from "@/constants/variables";
import axios from "axios";

const createOrderOffline = async (body: any) => {
  const res = await axios.post(`${apiURL}/orderOffline`, body);
  return res.data;
};

export { createOrderOffline };
