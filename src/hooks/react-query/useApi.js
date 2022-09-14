import { useMutation } from "react-query";

export const useApi = (func, config = {}) => {
  const { data, error, mutateAsync, isLoading, ...reset } = useMutation(
    func,
    config
  );

  return {
    data: data?.data,
    error: error?.message ?? "Error! Please try again",
    callApi: mutateAsync,
    isLoading,
    ...reset,
  };
};
