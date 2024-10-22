import * as Yup from 'Yup'

export const initialValues = {
  firstName: "",
  lastName: "",
  speciality: [],
  phone: "",
  location: "Lima",
  email: "",
}

export interface IFormLawyer{
  firstName: string;
  lastName: string;
  speciality: string[];
  phone: string;
  location: string;
  email: string;
}

export const LawyerSchema = Yup.object().shape({
  firstName: Yup.string().required().min(3, "Mínimo 3 caracteres"),
  lastName: Yup.string().required("Apellido es requerido"),
  speciality: Yup.array().min(2, "Selecciona al menos dos especialidades"),
  phone: Yup.string().required(),
  location: Yup.string().required(),
  email: Yup.string().email("Ingresa un correo válido").required("Es requerido"),
  // province: Yup.string().required("Es requerido"),
  // district: Yup.string().required("Es requerido"),
  // address: Yup.string().required("Es requerido"),
})