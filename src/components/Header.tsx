import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";

export const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log("user from redux", user)

  const onClickLogout = () => {
    dispatch(logout());
  }
  return (
    <div
      id="header"
      className="p-4 flex justify-between items-center bg-[#3396D3]"
    >
      <div>
        <img
          width={35}
          src="https://static.vecteezy.com/system/resources/thumbnails/044/812/167/small/sophisticated-law-firm-logo-on-transparent-background-png.png"
          alt=""
        />
      </div>
      <div>
        <p>{user?.name} {user?.email}</p>
        {/* <a href="/create" className="text-white">
          Crear abogado
        </a> */}
        <Link to={"/create"} className="text-white">Crear abogado</Link>
        
        <Button type="primary" onClick={() => onClickLogout()}>Cerrar Sesión</Button>
      </div>
      {/* <nav>
        <ul className="flex gap-2 text-white">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Ciudades</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
