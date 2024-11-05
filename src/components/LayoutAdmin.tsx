import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { FunctionComponent, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { userStore } from "../store/user/user.store";
import { userInitialValue } from "../store/user/user.initialValue";
import { paths } from "../routes/paths";
import ProtectedComponent from "./ProtectedComponent";

interface ILayoutAdmin {
  children: ReactNode;
}

export const LayoutAdmin: FunctionComponent<ILayoutAdmin> = ({ children }) => {
  const [keySelected, setKeySelected] = useState(["1"]);
  const { user, setAuthenticated, setUser } = userStore();

  const sideMenu = [
    {
      key: "1",
      label: <Link to="/registrar-abogado">Registrar Abogado</Link>,
    },
    {
      key: "2",
      label: <Link to="/lista-abogados">Listar Abogados</Link>,
    },
  ];

  const mainMenu = [
    {
      key: "1",
      label: <Link to="/">Inicio</Link>,
    },
    {
      key: "2",
      label: <Link to="/registrar-abogado">Registrar Abogado</Link>,
    },
    {
      key: "3",
      label: <Link to="/lista-abogados">Listar Abogados</Link>,
    },
  ];

  const onChangeSideMenu = (item) => {
    console.log("item seleccionado en ONCHANGE SIDEMENU", item);
    setKeySelected(item.keyPath);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    setUser(userInitialValue);
  };

  console.log("keySelected", keySelected);
  return (
    <Layout>
      <Header className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="demo-logo">
            <img
              width={40}
              src="https://static.vecteezy.com/system/resources/thumbnails/044/812/167/small/sophisticated-law-firm-logo-on-transparent-background-png.png"
              alt=""
            />
          </div>
          <div className="text-gray-500 flex gap-4">
            <Link to="/">Inicio</Link>
            <ProtectedComponent rolesRequired={["admin"]}>
              <Link to={paths.createLawyer}>Registrar Abogado</Link>
            </ProtectedComponent>
            <Link to={paths.listLawyer}>Listar Abogados</Link>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-gray-500">{user?.firstName}</div>
          <button className="text-white" onClick={() => logout()}>
            Cerrar Sesión
          </button>
        </div>
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
              style={{ height: "100%" }}
              items={sideMenu}
              onClick={(item) => onChangeSideMenu(item)}
              selectedKeys={keySelected}
            />
          </Sider>
          <Content
            style={{ padding: "24px", minHeight: 280 }}
            className="bg-white"
          >
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
