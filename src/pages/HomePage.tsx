import { Button, Pagination, Select, Spin } from "antd";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
// import { useEffect, useState } from "react";
// import { ILawyer } from "../interfaces/lawyer.interface";
// import { toast } from 'react-toastify';
// import { mockApi } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { getLawyer, getLawyers } from "../services/mockApi";
import { useState } from "react";
import { locationOptions, specialityOptions } from "../utils/options";

export const HomePage = () => {
  // const [isActive, setIsActive] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    location: "1",
    speciality: "1",
  });
  const handleChange = (name: "location" | "speciality", value: string) => {
    setFilters((filters) => ({
      ...filters,
      [name]: value,
    }));
  };

  const {
    data,
    isError,
    error,
    isFetching: isLoading,
  } = useQuery(["getLawyers",page, filters], () => getLawyers(), {
    // refetchInterval: .1 * 60 * 1000
    staleTime: 20 * 60 * 1000,
  });

  const {data: dataSingleLawyer} = useQuery(["getSingleLawyer"], () => getLawyer("1"))

  return (
    <div className="w-full">
      <Header />
      <section id="mainSearch" className="w-full h-72 relative">
        <img
          className="w-full h-full object-cover"
          src="https://www.criminaldefencelawyers.com.au/wp-content/uploads/2020/02/Lawyer-behind-desk-with-gavel-1-scaled.jpg"
          alt=""
        />
        <div
          id="form-mainSearch"
          className="absolute top-1/2 right-1/2 flex gap-2 flex-col sm:flex-row"
          style={{ transform: "translate(50%, -50%)" }}
        >
          <Select
            style={{ width: 160 }}
            onChange={(newValue) => handleChange("location", newValue)}
            options={locationOptions}
            placeholder="Ubicación"
            value={filters.location}
          />
          <Select
            options={specialityOptions}
            style={{ width: 160 }}
            onChange={(newValue) => handleChange("speciality", newValue)}
            placeholder="Especialidad"
            value={filters.speciality}
          />
          <Button type="primary">Buscar</Button>
        </div>
      </section>
      <div>
        <Pagination total={20} pageSize={2} defaultCurrent={1} onChange={(page) => setPage(page)} />
      </div>

      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center py-5 flex-col gap-3">
          <p className="text-gray-700 text-center">Cargando Abogados</p>
          <Spin />
        </div>
      ) : (
        <section
          id="cards"
          className="p-4 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3"
        >
          {data?.map((lawyer) => (
            <Card key={lawyer.id} lawyer={lawyer} />
          ))}
        </section>
      )}
      {isError && (
        <div className="text-red-500">
          Ocurrió un error
          {error?.message}
        </div>
      )}
      <div></div>
      <footer>
        <p className="text-center p-4 bg-[#3396D3] text-white">
          © 2024 Derechos Reservados
        </p>
      </footer>
    </div>
  );
};
