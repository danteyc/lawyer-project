import { Button, Pagination, Select, Spin } from "antd";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { locationOptions, specialityOptions } from "../utils/options";
import { getLawyers, searchLawyers } from "../services/Lawyer";
import { userStore } from "../store/user/user.store";
import { getCities } from "../services/City";
import { getSpecialties } from "../services/Specialty";

export const HomePage = () => {
  // const [isActive, setIsActive] = useState(false);
  const { user, isAuthenticated } = userStore();

  const [filters, setFilters] = useState({
    location: 1,
    speciality: 1,
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

  const handleChange = (name: "location" | "speciality", value: number) => {
    setFilters((filters) => ({
      ...filters,
      [name]: value,
    }));
  };

  const { data, isFetching: isLoading, refetch } = useQuery(
    ["getLawyers"],
    () => searchLawyers({
      cityId: filters.location,
      specialtyId: filters.speciality,
    }),
    {
      staleTime: 20 * 60 * 1000,
    }
  );

  // const {data: dataSingleLawyer} = useQuery(["getSingleLawyer"], () => getLawyer("1"))

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
            options={cityOptions}
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
          <Button type="primary" onClick={() => refetch()}>Buscar</Button>
        </div>
      </section>
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
          {data?.lawyers.map((lawyer) => (
            <Card key={lawyer.id} lawyer={lawyer} />
          ))}
          <div></div>
        </section>
      )}
      <footer>
        <p className="text-center p-4 bg-[#3396D3] text-white">
          © 2024 Derechos Reservados
        </p>
      </footer>
    </div>
  );
};
