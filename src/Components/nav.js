import { NavLink } from "react-router-dom";
import { Navbar, Form, FormControl } from "react-bootstrap";
const Nav = () => {
  return (
    <nav id="navLinks">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Videos">Videos</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Merch">Merch</NavLink>
      <NavLink to="/Bio">Bio</NavLink>
    </nav>
  );
};

export default Nav;
