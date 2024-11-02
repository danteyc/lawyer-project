import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { HomePage } from "../features/HomePage";
import {  CreateLawyerPage } from "../features/CreateLawyer/CreateLawyerPage";
import { LoginPage } from "../features/Auth/LoginPage";
import { ListLawyerPage } from "../features/ListLawyer/ListLawyerPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/registrar-abogado" element={<CreateLawyerPage />} />
    <Route path="/lista-abogados" element={<ListLawyerPage />} />

    </>

  )
);