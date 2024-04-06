import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons"; // Importar el icono de logout y el icono de menú
import { useState } from "react"; // Importar useState para manejar el estado del menú

const { container, navLinks, link, logOut, toggleBtn } = styles;

export default function Nav({ onSearch, onLogout, random }) {
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para controlar si el menú de navegación está abierto o cerrado

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen); // Cambiar el estado de isNavOpen al opuesto del estado actual
  };

  return (
    <div className={container}>
      <button className={toggleBtn} onClick={handleToggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={isNavOpen ? `active` : navLinks}>
        <Link className={link} to="/home">
          Home
        </Link>
        <Link className={link} to="/about">
          About
        </Link>
        <Link className={link} to="/favorites">
          ♥
        </Link>
        <Link className={link} onClick={random}>
          Random
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
      <button className={logOut} onClick={onLogout} title="Salir">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </div>
  );
}
