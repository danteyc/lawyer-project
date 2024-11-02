import { Breadcrumb, Layout, Menu } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { FunctionComponent, ReactNode } from "react"

interface ILayoutAdmin{
  children: ReactNode,
}

export const LayoutAdmin: FunctionComponent<ILayoutAdmin> = ({children}) => {
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
  )
}