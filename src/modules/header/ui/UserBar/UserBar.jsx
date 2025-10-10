import css from "./UserBar.module.css";

import LogoutButton from "../LogoutButton/LogoutButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../entities/user/model/selectors";
import { getFirstLetter } from "../../../../shared/utils/getFirstLetter";

const UserBar = ({ windowWidth, setIsBurgerMenuOpen }) => {
  const { name } = useSelector(selectUser);
  return (
    <div className={css.userBarWrapper}>
      <div className={css.usersFirstLetter}>
        <span>{getFirstLetter(name)}</span>
      </div>

      {windowWidth < 768 ? (
        <button
          className={css.burgerMenuBtn}
          type="button"
          onClick={() => setIsBurgerMenuOpen(true)}
        >
          <svg width={28} height={28}>
            <use href="/icons/icons.svg#icon-burger"></use>
          </svg>
        </button>
      ) : (
        <LogoutButton />
      )}
    </div>
  );
};

export default UserBar;
