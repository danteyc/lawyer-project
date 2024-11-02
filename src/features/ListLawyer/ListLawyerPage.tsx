import { Modal, Table, TableProps, Tag } from "antd";
import { LayoutAdmin } from "../../components/LayoutAdmin";
import { useQuery } from "@tanstack/react-query";
import { getLawyers } from "../../services/Lawyer";
import { FunctionComponent, useState } from "react";
import { ILawyer } from "../../interfaces/lawyer.interface";
import { MdDelete, MdEdit } from "react-icons/md";

export const ListLawyerPage: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { data, isFetching: isLoading } = useQuery(["getLawyers"], getLawyers);

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const columnsLawyer: TableProps<ILawyer>["columns"] = [
    {
      title: "Nombre",
      key: "name",
      dataIndex: "firstName",
    },
    {
      title: "Apellido",
      key: "lastName",
      dataIndex: "lastName",
    },
    {
      title: "Celular",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
    },
    {
      title: "DNI",
      key: "dni",
      dataIndex: "dni",
    },
    {
      title: "Ciudad",
      key: "city",
      render: (row: ILawyer) => {
        return <Tag color="geekblue">{row.City.name}</Tag>;
      },
    },
    {
      title: "Especialidad",
      key: "specialty",
      render: (row: ILawyer) => {
        return <Tag color="green">{row.Specialty.name}</Tag>;
      },
    },
    {
      title: "Acciones",
      key: "actions",
      render: (row: ILawyer) => {
        return (
          <div className="flex gap-6 text-lg">
            <button className="text-blue-500">
              <MdEdit />
            </button>
            <button className="text-red-500" onClick={() => setOpen(true)}>
              <MdDelete />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <LayoutAdmin>
      <div>
        <h1 className="text-lg font-bold mb-4">Lista de abogados</h1>
        <Table
          loading={isLoading}
          columns={columnsLawyer}
          dataSource={data?.lawyers}
        />
        <Modal
          title="Eliminar Abogado"
          okText="Eliminar"
          cancelText="Cancelar"
          open={open}
          // onOk={handleOk}
          // confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>Estás seguro?</p>
        </Modal>
      </div>
    </LayoutAdmin>
  );
};
