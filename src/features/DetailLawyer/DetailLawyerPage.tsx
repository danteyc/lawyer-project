import React from "react";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDetailLawyer, getLawyers } from "../../services/Lawyer";
import { IDetailLawyer } from "../../services/Lawyer/lawyer.interface";
import { Spin } from "antd";

export const DetailLawyerPage = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const { data, isFetching: isLoading } = useQuery(["getLawyer", id], () =>
    getDetailLawyer(id)
  );

  return (
    <div className="w-full">
      <Header />
      <div className="p-8 flex justify-between gap-8">
        {isLoading ? (
          <Spin />
        ) : (
          <>
            <div id="left" className="w-8/12">
              <p className="font-bold text-2xl">
                {data?.lawyer.firstName} {data?.lawyer.lastName}
              </p>
              <p>
                <span className="font-semibold">Especialidad:</span>{" "}
                {data?.lawyer.Specialty.name}
              </p>
              <p>
                <span className="font-semibold">Ciudad:</span>
                {data?.lawyer.City.name}
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">Whatsapp:</span>
                {data?.lawyer.phoneNumber}
              </p>
              <p className="mt-4">{data?.lawyer.description}</p>
              <div className="mt-8">
                <p className="font-bold">Reseñas</p>
                <div className="flex flex-col gap-4">
                <div className="bg-gray-300 p-4 rounded-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur molestias, vel voluptatibus obcaecati praesentium nisi maxime voluptas? Eligendi commodi sint quos, consequuntur esse corporis ullam dolore molestias ipsum vitae!
                </div>
                <div className="bg-gray-300 p-4 rounded-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur molestias, vel voluptatibus obcaecati praesentium nisi maxime voluptas? Eligendi commodi sint quos, consequuntur esse corporis ullam dolore molestias ipsum vitae!
                </div>
                <div className="bg-gray-300 p-4 rounded-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur molestias, vel voluptatibus obcaecati praesentium nisi maxime voluptas? Eligendi commodi sint quos, consequuntur esse corporis ullam dolore molestias ipsum vitae!
                </div>
                <div className="bg-gray-300 p-4 rounded-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur molestias, vel voluptatibus obcaecati praesentium nisi maxime voluptas? Eligendi commodi sint quos, consequuntur esse corporis ullam dolore molestias ipsum vitae!
                </div>
                </div>
              </div>
            </div>
            <div id="right" className="w-4/12 flex flex-col gap-8 items-center">
              <img
                src={
                  data?.lawyer?.image ??
                  "https://headshots-inc.com/wp-content/uploads/2022/07/attorny-headshot-example-1.jpg"
                }
                alt="Lawyer photo"
                className="w-full object-cover rounded-full aspect-square h-auto"
              />
              <a
                href={`https://wa.me/51${data?.lawyer.phoneNumber}?text=Estoy%20interesadp%20en%20tus%20servicios%`}
              >
                <button className="bg-[#06c62a] px-4 py-1 text-white font-semibold flex gap-2 rounded-lg">
                  <span>Contáctame por Whatsapp</span>
                  <img
                    className="w-6 h-auto"
                    src="https://static.vecteezy.com/system/resources/thumbnails/016/716/468/small/whatsapp-icon-free-png.png"
                    alt=""
                  />
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
