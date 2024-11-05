import { IFormLawyer } from "../../features/CreateLawyer/createLawyer.form";
import { apiLawyers } from "../api"
import { IDetailLawyer, IPaginatedLawyers, IQuery, IResponseCreateLawyer, Lawyer } from "./lawyer.interface";

export const getLawyers = async (): Promise<IPaginatedLawyers> => {
  const response = await apiLawyers.get('/lawyer/list');
  return response.data;
}

export const createLawyer = async (newLawyer: IFormLawyer): Promise<IResponseCreateLawyer> => {
  const response = await apiLawyers.post('/lawyer/create', newLawyer);
  return response.data;
}

export const getDetailLawyer = async (id: string): Promise<IDetailLawyer> => {
  const response = await apiLawyers.get(`/lawyer/detail/${id}`);
  return response.data;
}

export const searchLawyers = async (query: IQuery): Promise<{lawyers: Lawyer[]}> => {
  const response = await apiLawyers.get('/lawyer/search', {
    params: {
      cityId: query?.cityId,
      specialtyId: query?.specialtyId
    }
  });

  return response.data;
}