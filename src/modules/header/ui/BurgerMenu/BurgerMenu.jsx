import clsx from "clsx";
import css from "./BurgerMenu.module.css";
import { IoClose } from "react-icons/io5";
import UserNav from "../UserNav/UserNav";
import Button from "../../../../shared/ui/button/Button";

const BurgerMenu = ({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
  handleLogout,
}) => {
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
      <Button label="Log out" onClick={handleLogout} />
    </div>
  );
};

export default BurgerMenu;
