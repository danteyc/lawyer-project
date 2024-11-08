import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

export const Header = () => {
  return (
    <div
      id="header"
      className="p-4 flex justify-between items-center bg-[#3396D3]"
    >
      <Link to={paths.home}>
        <img
          width={35}
          src="https://static.vecteezy.com/system/resources/thumbnails/044/812/167/small/sophisticated-law-firm-logo-on-transparent-background-png.png"
          alt=""
        />
      </Link>
      <nav>
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
      </nav>
    </div>
  );
};
