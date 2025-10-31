import useSWR from "swr";
import { axiosInstance } from "@/lib/axios-instance";

const baseURL: string = `${process.env.NEXT_PUBLIC_SERVER_URI}/user/get-all-users`;

const fetch = async (endpoint: string) => {
  const { data } = await axiosInstance.get(endpoint);
  return data;
};

export const useGetAllUsers = () => {
  const { data, error, isLoading, mutate } = useSWR(baseURL, fetch);
  return { data, error, isLoading, mutate };
};
