import { apiURL } from "@/constants/variables";
import axios from "axios";

const getUsers = async () => {
  const res = await axios.get(`${apiURL}/users`);
  return res.data;
};
const getUserById = async (id: string) => {
  const res = await axios.get(`${apiURL}/users/${id}`);
  return res.data;
};
const updateUser = async ({ body, id }: any) => {
  const res = await axios.patch(`${apiURL}/users/${id}`, body);
  return res.data;
};
const deleteUser = async (id: string) => {
  const res = await axios.get(`${apiURL}/users/${id}`);
  return res.data;
};

export { getUsers, getUserById, updateUser, deleteUser };
