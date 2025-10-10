import clsx from "clsx";
import css from "./Input.module.css";

const Input = ({ name, type = "text", label, ...rest }, ref) => {
  return (
    <div className={css.inputWrapper}>
      <input
        ref={ref}
        className={clsx(
          css.input,
          label === "Name:" && css.name,
          label === "Mail:" && css.mail
        )}
        type={type}
        name={name}
        id={name}
        {...rest}
      />
      <span className={css.label}>{label}</span>
    </div>
  );
};

export default Input;
