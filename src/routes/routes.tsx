import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { HomePage } from "../features/HomePage";
import { CreateLawyer } from "../features/CreateLawyer/CreateLawyer";
import { LoginPage } from "../features/Auth/LoginPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="create" element={<CreateLawyer />} />
    </>

  )
);