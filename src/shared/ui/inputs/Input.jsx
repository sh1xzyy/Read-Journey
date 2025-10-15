import clsx from "clsx";
import css from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ type = "text", label, hint, error, id, ...rest }, ref) => {
    return (
      <div className={css.inputWrapper}>
        {label && (
          <label htmlFor={id} className={css.label}>
            {label}
          </label>
        )}

        <div className={css.inputContainer}>
          <input
            id={id}
            type={type}
            ref={ref}
            className={clsx(
              css.input,
              hint === "Name:" && css.name,
              hint === "Mail:" && css.mail,
              hint === "Book title:" && css.bookTitle,
              hint === "The author:" && css.author,
              hint === "Number of pages:" && css.numOfPages,
              hint === "Page number:" && css.pageOfNum
            )}
            {...rest}
          />
          {hint && <span className={css.hint}>{hint}</span>}
        </div>

        {error && <span className={css.errorMsg}>{error.message}</span>}
      </div>
    );
  }
);

export default Input;
