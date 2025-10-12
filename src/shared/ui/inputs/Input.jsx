import clsx from "clsx";
import css from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(({ type = "text", label, error, ...rest }, ref) => {
  return (
    <div className={css.inputWrapper}>
      <input
        ref={ref}
        className={clsx(
          css.input,
          label === "Name:" && css.name,
          label === "Mail:" && css.mail,
          label === "Book title:" && css.bookTitle,
          label === "The author:" && css.author,
          label === "Number of pages:" && css.numOfPages
        )}
        type={type}
        {...rest}
      />
      <span className={css.label}>{label}</span>
      {error && <span className={css.errorMsg}>{error.message}</span>}
    </div>
  );
});
export default Input;
