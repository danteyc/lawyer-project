// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Button,
  Input,
  Select,
} from "antd";
import { useFormik } from "formik";
import { IFormLawyer, initialValues, LawyerSchema } from "./createLawyer.form";
import { getSpecialties } from "../../services/Specialty";
import { getCities } from "../../services/City";
import { createLawyer } from "../../services/Lawyer";
import { LayoutAdmin } from "../../components/LayoutAdmin";

export const CreateLawyerPage = () => {
  const navigation = useNavigate();

  // const { isLoading, mutateAsync, error, isError } = useMutation({
  //   mutationFn: (dataLogin: ILogin) => {
  //     return loginApi(dataLogin);
  //   },
  //   onSuccess: (data) => {
  //     localStorage.setItem("token", data.token);
  //     // console.log("DATA FROM ONSUCCESS", data)
  //     navigation("/");
  //   }
  // });

  const {
    mutateAsync: saveLawyer,
    // data,
    isLoading,
  } = useMutation({
    mutationFn: (body: IFormLawyer) => {
      return createLawyer(body);
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema: LawyerSchema,
    onSubmit: (values) => {
      saveLawyer(values).then(() => {
        navigation("/lista-abogados");
      })
    },
  });

  const { data: responseSpecialties } = useQuery(
    ["getSpecialties"],
    getSpecialties
  );
  const { data: responseCities } = useQuery(["getCities"], getCities, {
    staleTime: 1000 * 60 * 10,
  });

  const specialityOptions = responseSpecialties?.specialties?.map(
    (specialty) => ({
      label: specialty.name,
      value: specialty.id,
    })
  );

  const cityOptions = responseCities?.map((city) => ({
    label: city.name,
    value: city.id,
  }));

  // const { data, isLoading, isError, mutateAsync } = useMutation({
  //   mutationFn: (newLayer: ILawyer) => {
  //     return createLawyer(newLayer);
  //   },
  // });

  // const onChangeForm = (name: string, value: string) => {
  //   setFormLawyer((formLawyer) => ({
  //     ...formLawyer,
  //     [name]: value,
  //   }));
  // };

  // const onSubmit = () => {
  //   mutateAsync(formLawyer).then(() => {
  //     navigation("/");
  //   });
  // };

  const {
    values,
    setFieldTouched,
    touched,
    errors,
    getFieldProps,
    setFieldValue,
    handleSubmit,
  } = formik;

  console.log("values", values);

  return (
    <LayoutAdmin>
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="font-bold text-lg mb-4">Registrar abogado</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div id="form_item" className="flex flex-col">
            <label htmlFor="firstName">Nombres</label>
            <Input
              {...getFieldProps("firstName")}
              onBlur={() => setFieldTouched("firstName", true)}
              name="firstName"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-600">{errors.firstName}</p>
            )}
          </div>
          <div id="form_item" className="flex flex-col">
            {" "}
            <label htmlFor="lastName">Apellidos</label>
            <Input
              {...getFieldProps("lastName")}
              onBlur={() => setFieldTouched("lastName", true)}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-600">{errors.lastName}</p>
            )}
          </div>
          <div id="form_item" className="flex flex-col col-span-2">
            <label htmlFor="description">Descripción</label>

            <Input.TextArea {...getFieldProps("description")} />
          </div>
          <div id="form_item" className="flex flex-col">
            <label htmlFor="dni">Dni</label>

            <Input {...getFieldProps("dni")} placeholder="DNI" name="dni" />
            {errors.dni && touched.dni && (
              <p className="text-red-600">{errors.dni}</p>
            )}
          </div>
          <div id="form_item" className="flex flex-col">
            <label htmlFor="phoneNumber">Celular</label>
            <Input
              {...getFieldProps("phoneNumber")}
              name="phoneNumber"
              type="text"
              placeholder="Phone"
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="text-red-600">{errors.phoneNumber}</p>
            )}
          </div>
          <div id="form_item" className="flex flex-col">
            <label>Especialidad</label>

            <Select
              value={values.specialtyId}
              onSelect={(newValue) => setFieldValue("specialtyId", newValue)}
              options={specialityOptions}
              placeholder="Speciality"
            />
            {errors.specialtyId && (
              <p className="text-red-600">{errors.specialtyId}</p>
            )}
          </div>
          <div id="form_item" className="flex flex-col">
            <label>Ciudad</label>

            <Select
              value={values.cityId}
              onSelect={(newValue) => setFieldValue("cityId", newValue)}
              options={cityOptions}
              placeholder="Speciality"
            />
            {errors.cityId && <p className="text-red-600">{errors.cityId}</p>}
          </div>
          <div className="col-span-2 flex justify-center">
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="w-6/12"
            >
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </LayoutAdmin>
  );
};
