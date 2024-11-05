import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { HomePage } from "../features/HomePage";
import {  CreateLawyerPage } from "../features/CreateLawyer/CreateLawyerPage";
import { LoginPage } from "../features/Auth/LoginPage";
import { ListLawyerPage } from "../features/ListLawyer/ListLawyerPage";
import ProtectedRoute from "./ProtectedRoute";
import { paths } from "./paths";
import { DetailLawyerPage } from "../features/DetailLawyer/DetailLawyerPage";
// import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path={paths.home} element={<HomePage/>} />
    <Route path={paths.login} element={<LoginPage />} />
    <Route path={paths.detailLawyer} element={<DetailLawyerPage />} />
    <Route element={<ProtectedRoute rolesRequired={['admin', 'guest']}/>}>
      <Route path={paths.listLawyer} element={<ListLawyerPage />} />
    </Route>
    <Route element={<ProtectedRoute rolesRequired={['admin']}/>}>
      <Route path={paths.createLawyer} element={<CreateLawyerPage />} />
    </Route>
    {/* <Route
      element={
        <ProtectedRoute
          rolesRequired={[
          ]}
        />
      }
    >
    <Route path="/registrar-abogado" element={<CreateLawyerPage />} />

    </Route> */}
    </>

  )
);