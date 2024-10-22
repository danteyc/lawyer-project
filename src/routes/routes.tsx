import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage";
import { CreateLawyer } from "../pages/CreateLawyer/CreateLawyer";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<HomePage/>} />
    <Route path="create" element={<CreateLawyer />} />
    </>

  )
);