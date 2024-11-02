import { IFormLawyer } from "../../features/CreateLawyer/createLawyer.form";
import { apiLawyers } from "../api"
import { IPaginatedLawyers, IResponseCreateLawyer } from "./lawyer.interface";

export const getLawyers = async (): Promise<IPaginatedLawyers> => {
  const response = await apiLawyers.get('/lawyer/list');
  return response.data;
}

export const createLawyer = async (newLawyer: IFormLawyer): Promise<IResponseCreateLawyer> => {
  const response = await apiLawyers.post('/lawyer/create', newLawyer);
  return response.data;
}