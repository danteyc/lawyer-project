import * as Yup from 'Yup'

export const initialValues: IFormLawyer = {
  firstName: "",
  lastName: "",
  specialityId: null,
  phoneNumber: "",
  cityId: 1,
  dni: "",
  description: ""
}

export interface IFormLawyer{
  firstName: string;
  lastName: string;
  specialityId: number | null;
  phoneNumber: string;
  dni: string;
  cityId: number | null;
  description: string
}

export const LawyerSchema = Yup.object().shape({
  firstName: Yup.string().required().min(3, "Mínimo 3 caracteres"),
  lastName: Yup.string().required("Apellido es requerido"),
  specialityId: Yup.number().required("Especialidad es requerida"),
  phoneNumber: Yup.string().length(9, "Debe ser de 9 dígitos").required("Teléfono es requerido"),
  dni: Yup.string().length(8, "Dni debe ser de 8 caracteres").required("DNI es requerido"),
  cityId: Yup.number().required("Ciudad es requerida"),
  description: Yup.string().required("Descripción es requerida")
})