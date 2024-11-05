import { Button, Input } from "antd";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../form/login.form";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../services/Auth";
import { ILogin } from "../../../services/Auth/auth.interfaces";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../../store/user/user.store";
import { paths } from "../../../routes/paths";

export const FormLogin = () => {
  const navigation = useNavigate();

  const {setUser, setAuthenticated} = userStore()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      mutateAsync(values)
    },
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;
    const { isLoading, mutateAsync, error, isError } = useMutation({
    mutationFn: (dataLogin: ILogin) => {
      return loginApi(dataLogin);
    },
    onSuccess: (data) => {
      console.log("DATa from response login", data)
      setUser(data.user)
      setAuthenticated(true)
      localStorage.setItem("token", data.token);
      // console.log("DATA FROM ONSUCCESS", data)
      navigation(paths.listLawyer);
    }
  });

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <div>
        <Input
          status={errors.email && "error"}
          {...getFieldProps("email")}
          name="email"
          placeholder="Email"
        />
        {errors.email && touched.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      <div>
        <Input.Password
          status={errors.password && "error"}
          {...getFieldProps("password")}
          placeholder="Password"
          name="password"
        />
        {errors.password && touched.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>
      <div>
        {(isError && isAxiosError(error)) && <p className="text-red-500 text-sm text-center">{error.response?.data.message}</p>}
      </div>

      <Button loading={isLoading} htmlType="submit" type="primary">Iniciar Sesión</Button>
    </form>
  );
};
