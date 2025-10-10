import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";
import clsx from "clsx";

const UserNav = ({ type }) => {
  return (
    <nav>
      <ul
        className={clsx(
          css.navigationList,
          type === "burger" && css.burgerNavigation
        )}
      >
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navigationLink, isActive && css.active)
            }
            to="/recommended"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navigationLink, isActive && css.active)
            }
            to="/library"
          >
            My library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
