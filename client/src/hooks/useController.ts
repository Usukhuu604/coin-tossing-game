// import { axiosInstance } from "../lib/axios-instance";
// import useSWR from "swr";

// export const useFetchClientData = (endpoint: string) => {
//   const { data, error, isLoading } = useSWR(endpoint, async () => {
//     const { data } = await axiosInstance.get(endpoint);
//     return data;
//   });
//   return { data, error, isLoading };
// };

// export const createUserName = async (userName: string) => {
//   const { data } = await axiosInstance.post("/user/create-user", { userName });
//   return data;
// };

// export const deleteUser = async (id: string) => {
//   const { data } = await axiosInstance.delete(`/user/delete-user/${id}`);
//   return data;
// };

// export const getUserById = async (id: string) => {
//   const { data } = await axiosInstance.get(`/user/get-user/${id}`);
//   return data;
// };
