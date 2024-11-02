import { apiLawyers } from "../api"
import { ICity } from "./city.interface";

export const getCities = async ():Promise<ICity[]> => {
  const reponse = await apiLawyers.get('/city')
  return reponse.data;
}
