import { useMutation } from "@tanstack/react-query";
import { TypeOrderOffline } from "./types";
import { createOrderOffline } from "./fetcher";

interface MUTATION_TYPE {
  type: "create";
  body?: TypeOrderOffline;
  id?: string;
}

const useMutationOrderOffline = () => {
  const mutation = useMutation({
    mutationKey: ["OrderOffline mutation"],
    mutationFn: ({ body, type, id }: MUTATION_TYPE) => {
      switch (type) {
        case "create":
          return createOrderOffline(body);
      }
    },
  });
  return {
    serviceOrderOffline: mutation.mutateAsync,
    ...mutation,
  };
};

export { useMutationOrderOffline };
