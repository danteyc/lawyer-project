import { jsonPlaceholderApi } from "../api";
import { IUser } from "./users.interface";

export const getUser = async (id: string): Promise<IUser> => {
  const response = await jsonPlaceholderApi.get(`/users/${id}`);
  return response.data;
}