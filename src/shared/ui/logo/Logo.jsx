import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import useWindowWidth from "../../hooks/useWindowWidth";

const Logo = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <Link className={css.link} to="/">
      <svg width={42} height={17}>
        <use href="/logo/logo.svg"></use>
      </svg>
      {windowWidth > 768 && <span className={css.label}>read journey</span>}
    </Link>
  );
};

export default Logo;
