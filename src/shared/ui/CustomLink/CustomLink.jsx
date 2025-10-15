import { Link } from "react-router-dom";
import css from "./CustomLink.module.css";
import clsx from "clsx";

const CustomLink = ({ to, label, type }) => {
  return (
    <Link
      className={clsx(
        css.link,
        type === "1" && css.firstLink,
        type === "2" && css.secondLink
      )}
      to={to}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
