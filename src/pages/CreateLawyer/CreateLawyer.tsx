import { useState } from "react";
import { ILawyer } from "../../interfaces/lawyer.interface";
import { mockApi } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createLawyer } from "../../services/mockApi";
import { Breadcrumb, Button, Input, InputNumber, Layout, Menu, Select } from "antd";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useFormik } from "formik";
import { initialValues, LawyerSchema } from "./createLawyer.form";

export const CreateLawyer = () => {
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: LawyerSchema,
    onSubmit: (values) => {
      console.log("values AL ENVIAR FORMULARIO", values);
    },
  });

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

  // console.log("data", data);
  // console.log("isLoading", isLoading);

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

  console.log("formik values", values);
  console.log("errors", errors);
  console.log("touched values", touched);

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
                {/* <input
                  // value={formLawyer.firstName}
                  // onChange={(e) => onChangeForm("firstName", e.target.value)}
                  type="text"
                  {...getFieldProps("firstName")}
                  name="firstName"
                  placeholder="First Name"
                /> */}
                <Input
                  value={values.firstName}
                  onChange={(e) =>
                    setFieldValue("firstName", e.target.value.trim())
                  }
                  onBlur={() => setFieldTouched("firstName", true)}
                  name="firstName"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName}</p>
                )}
                <input
                  {...getFieldProps("lastName")}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="text-red-600">{errors.lastName}</p>
                )}

                <input
                  {...getFieldProps("email")}
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}

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
                  value={values.speciality}
                  mode="multiple"
                  onChange={(newValue) => setFieldValue("speciality", newValue)}
                  options={[
                    {
                      label: "Civil",
                      value: "civil",
                    },
                    {
                      label: "Criminal",
                      value: "criminal",
                    },
                    {
                      label: "Laboral",
                      value: "laboral",
                    },
                  ]}
                  placeholder="Speciality"
                />
                {errors.speciality && (
                  <p className="text-red-600">{errors.speciality}</p>
                )}

                <input
                  {...getFieldProps("phone")}
                  name="phone"
                  type="text"
                  placeholder="Phone"
                />
                {(errors.phone && touched.phone) && <p className="text-red-600">{errors.phone}</p>}

                <input
                  {...getFieldProps("location")}
                  type="text"
                  name="location"
                  placeholder="Location"
                />
                {errors.location && (
                  <p className="text-red-600">{errors.location}</p>
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
