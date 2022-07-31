import { NavLink } from "react-router-dom"

import './Navbar.css'


function NavbarLink({ title, route }) {

  return (
    <NavLink className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} to={route}>
      { title }
    </NavLink>
  );
}

export default NavbarLink;
