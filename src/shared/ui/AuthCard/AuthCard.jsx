import clsx from "clsx";
import css from "./AuthCard.module.css";
const AuthCard = ({ children, type }) => {
  return (
    <div
      className={clsx(
        css.wrapper,
        type === "authWrapper" && css.authWrapper,
        type === "iphoneWrapper" && css.phoneWrapper
      )}
    >
      {children}
    </div>
  );
};

export default AuthCard;
