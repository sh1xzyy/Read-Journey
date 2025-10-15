import Logo from "../../shared/ui/logo/Logo";
import css from "./Header.module.css";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import { useState } from "react";
import BurgerMenu from "./ui/BurgerMenu/BurgerMenu";
import UserNav from "./ui/UserNav/UserNav";
import UserBar from "./ui/UserBar/UserBar";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../entities/user/model/operations";
import toast from "react-hot-toast";

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { windowWidth } = useWindowWidth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(logoutUserThunk()).unwrap();
      toast.success("Successfully logout");
      <Navigate to="/login" />;
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="container">
      <div className={css.headerWrapper}>
        <Logo />
        {windowWidth >= 768 && <UserNav />}
        <UserBar
          windowWidth={windowWidth}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          handleLogout={handleLogout}
        />

        {isBurgerMenuOpen && (
          <BurgerMenu
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            handleLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
