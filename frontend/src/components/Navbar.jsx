import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        <Link className="nav-link" to="/levels">
          <li className="nav-item">Níveis</li>
        </Link>
        <Link className="nav-link" to="/developers">
          <li className="nav-item">Desenvolvedores</li>
        </Link>
      </ul>
    </nav>
  );
};
