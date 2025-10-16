import css from "./UserBar.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../entities/user/model/selectors";
import { getFirstLetter } from "../../../../shared/utils/getFirstLetter";
import Button from "../../../../shared/ui/Button/Button";

const UserBar = ({ windowWidth, setIsBurgerMenuOpen, handleLogout }) => {
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
          aria-label="open burger menu button"
        >
          <svg width={28} height={28}>
            <use href="/icons/icons.svg#icon-burger"></use>
          </svg>
        </button>
      ) : (
        <Button label="Log out" onClick={handleLogout} />
      )}
    </div>
  );
};

export default UserBar;
