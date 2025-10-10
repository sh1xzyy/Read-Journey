import Logo from "../../shared/ui/logo/Logo";
import css from "./Header.module.css";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import { useState } from "react";
import BurgerMenu from "./ui/BurgerMenu/BurgerMenu";
import UserNav from "./ui/UserNav/UserNav";
import UserBar from "./ui/UserBar/UserBar";

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { windowWidth } = useWindowWidth();
  return (
    <div className="container">
      <div className={css.headerWrapper}>
        <Logo />
        {windowWidth >= 768 && <UserNav />}
        <UserBar
          windowWidth={windowWidth}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        />

        {isBurgerMenuOpen && (
          <BurgerMenu
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
