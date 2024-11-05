import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../store/user/user.store";

type ProtectedRouteType = {
  rolesRequired?: ("admin" | "guest")[];
};

// export default function ProtectedRoute({ rolesRequired }: ProtectedRouteType) {
  export default function ProtectedRoute({rolesRequired} : ProtectedRouteType) {
    const { user, isAuthenticated } = userStore();
    const role = user?.role

  // const { status, roles } = useContext(AuthContext);
  // const role = "admin"

  if (rolesRequired && isAuthenticated) {
    return rolesRequired.includes(role as "admin" | "guest") ? (
        <Outlet />
    ) : (
      <Navigate to={"/login"} />
    );
  } else {
    return isAuthenticated ? (
        <Outlet />
    ) : (
      <Navigate to={"/login"} />
    );
  }
}
