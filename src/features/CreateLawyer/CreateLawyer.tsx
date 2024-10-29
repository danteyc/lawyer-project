import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Breadcrumb,
  Input,
  InputNumber,
  Layout,
  Menu,
  Select,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useFormik } from "formik";
import { initialValues, LawyerSchema } from "./createLawyer.form";
import { getSpecialties } from "../../services/Specialty";

export const CreateLawyer = () => {
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: LawyerSchema,
    onSubmit: (values) => {
      console.log("values AL ENVIAR FORMULARIO", values);
    },
  });

  const { data: responseSpecialties } = useQuery(['getSpecialties'], getSpecialties)

  const specialityOptions = responseSpecialties?.specialties?.map((specialty) => ({
    label: specialty.name,
    value: specialty.id
  }))

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


  const items = [
    {
      key: "1",
      label: "Opción 1",
    },
    {
      key: "2",
      label: "Opción 2",
    },
    {
      key: "3",
      label: "Opción 3",
    },
  ];

  const {
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    getFieldProps,
    setFieldValue,
    handleSubmit,
  } = formik;

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Lawyers</Breadcrumb.Item>
          <Breadcrumb.Item>Create</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
          }}
        >
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items}
            />
          </Sider>
          <Content
            style={{ padding: "0 24px", minHeight: 280 }}
            className="bg-white"
          >
            <div className="flex flex-col items-center gap-2 ">
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="firstName">First Name</label>
                <Input
                  {...getFieldProps("firstName")}
                  onBlur={() => setFieldTouched("firstName", true)}
                  name="firstName"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName}</p>
                )}
                <label htmlFor="lastName">Last Name</label>
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

                {/* <input
                  {...getFieldProps("email")}
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>} */}
                <label htmlFor="description">Description</label>

                <Input.TextArea {...getFieldProps("description")} />
                <label htmlFor="dni">DNI</label>


                <Input {...getFieldProps("dni")} placeholder="DNI" name="dni" />
                {errors.dni && touched.dni && (
                  <p className="text-red-600">{errors.dni}</p>
                )}
                <label htmlFor="phoneNumber">Phone</label>
                <Input
                  {...getFieldProps("phoneNumber")}
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone"
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-red-600">{errors.phoneNumber}</p>
                )}

                {/* <input
                  {...getFieldProps("speciality")}
                  name="speciality"
                  type="text"
                  placeholder="Speciality"
                /> */}
                {/* <select {...getFieldProps("speciality")} name="speciality" >
                  <option value="civil">Civil</option>
                  <option value="criminal">Criminal</option>
                  <option value="laboral">Laboral</option>
                </select> */}
                <Select
                  value={values.specialityId}
                  onSelect={(newValue) => setFieldValue("specialityId", newValue)}
                  options={specialityOptions}
                  placeholder="Speciality"
                />
                {errors.specialityId && (
                  <p className="text-red-600">{errors.specialityId}</p>
                )}

                <Input
                  {...getFieldProps("cityId")}
                  type="text"
                  name="location"
                  placeholder="Location"
                />
                {errors.cityId && (
                  <p className="text-red-600">{errors.cityId}</p>
                )}

                {/* <InputNumber<number>
                  defaultValue={1000}
                  formatter={(value) =>
                    `S/. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  // parser={(value) =>
                  //   value?.replace(/\$\s?|(,*)/g, "") as unknown as number
                  // }
                  onChange={(e) => setFieldValue("price", e)}
                /> */}

                <button type="submit" className="bg-blue-500">
                  Submit
                </button>
              </form>
            </div>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
