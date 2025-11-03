import { instanceOfServer } from "@/lib/axios-instance";

if (!process.env.NEXT_PUBLIC_SERVER_URI) {
  throw new Error("Server URI not defined");
}
const baseURL = `${process.env.NEXT_PUBLIC_SERVER_URI}/user/create-user`;

export const createUser = async (userData: { userName: string }) => {
  const { data } = await instanceOfServer.post(baseURL, userData);
  return data;
};
