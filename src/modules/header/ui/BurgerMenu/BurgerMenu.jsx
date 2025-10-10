import clsx from "clsx";
import LogoutButton from "../LogoutButton/LogoutButton";
import css from "./BurgerMenu.module.css";
import { IoClose } from "react-icons/io5";
import UserNav from "../UserNav/UserNav";

const BurgerMenu = ({ isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
  return (
    <div
      className={clsx(css.burgerMenuWrapper, {
        [css.active]: isBurgerMenuOpen,
      })}
    >
      <div></div>
      <button
        className={css.closeButton}
        type="button"
        onClick={() => setIsBurgerMenuOpen(false)}
      >
        <IoClose color="var(--color-white)" size={28} />
      </button>

      <UserNav type="burger" />

      <LogoutButton />
    </div>
  );
};

export default BurgerMenu;
