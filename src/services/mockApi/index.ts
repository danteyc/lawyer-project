import { ILawyer } from "../../interfaces/lawyer.interface";
import { mockApi } from "../api";

export const getLawyer = async (id: string): Promise<ILawyer> => {
  const response = await mockApi.get(`/users/lawyers/${id}`);
  return response.data;
}

export const createLawyer = async (lawyer: ILawyer): Promise<ILawyer> => {
  const response = await mockApi.post('/users/lawyers', lawyer);
  return response.data;
}