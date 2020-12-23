import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="navLinks">
      <ul className="linkList">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/Videos">Videos</NavLink>
        </li>

        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/Merch">Merch</NavLink>
        </li>

        <li>
          <NavLink to="/Bio">Bio</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
