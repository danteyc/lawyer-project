import { ILogin } from "../../../services/Auth/auth.interfaces";
import * as Yup from 'Yup';

export const initialValues: ILogin = {
  email: '',
  password: ''
}

export const validationSchema = Yup.object({
  email: Yup.string().email("Ingresa un email válido").required("El email es requerido"),
  password: Yup.string().required("La contraseña es requerida")
})

