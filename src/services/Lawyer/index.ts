import { apiLawyers } from "../api"
import { IPaginatedLawyers } from "./lawyer.interface";

export const getLawyers = async (): Promise<IPaginatedLawyers> => {
  const response = await apiLawyers.get('/lawyer/list');
  return response.data;
}