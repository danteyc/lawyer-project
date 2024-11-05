import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../store/user/user.store";

interface IProtectedComponent {
  children: React.ReactNode
  rolesRequired: ("admin" | "guest")[]
}

// export default function ProtectedRoute({ rolesRequired }: ProtectedRouteType) {
  export default function ProtectedComponent({children, rolesRequired}: IProtectedComponent) {
    const { user } = userStore();
    const role = user?.role

    return rolesRequired.includes(role as "admin" | "guest") ? (
       <>{children}</>
    ) : (
      null
    );
}
