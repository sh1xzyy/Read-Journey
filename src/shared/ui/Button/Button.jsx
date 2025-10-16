import css from "./Button.module.css";

const Button = ({ label, type = "button", onClick }) => {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
