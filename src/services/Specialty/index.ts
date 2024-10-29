import { apiLawyers } from "../api"
import { IResponseCreateSpecialty, IResponseSpecialty } from "./specialty.interface";

export const getSpecialties = async (): Promise<IResponseSpecialty> => {
  const response = await apiLawyers.get('/specialty');
  return response.data;
}

export const createSpecialty = async(bodySpecialty : {name: string}) : Promise<IResponseCreateSpecialty> => {
  const response = await apiLawyers.post('/specialty', bodySpecialty);
  return response.data;
}