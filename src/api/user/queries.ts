"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./fetcher";
import { TypeUser } from "./types";
import { ApiResponse } from "../_global/ApiResponse";

const useQueryUsers = () => {
  const query = useQuery<ApiResponse<TypeUser[]>>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return {
    dataUsers: query.data?.data,
    ...query,
  };
};

export { useQueryUsers };
