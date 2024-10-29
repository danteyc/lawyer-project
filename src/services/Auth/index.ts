import { apiLawyers } from "../api"
import { ILogin, IResponseLogin, IUser } from "./auth.interfaces"

export const registerApi = async (body: IUser) => {
  const response = await apiLawyers.post('/auth/register', body)
  return response.data;
}

export const loginApi = async (body: ILogin): Promise<IResponseLogin> => {
  const response = await apiLawyers.post('/auth/login', body)
  return response.data;
}

export const logoutApi = async () => {
  const response = await apiLawyers.post('/auth/logout')
  return response.data;
}