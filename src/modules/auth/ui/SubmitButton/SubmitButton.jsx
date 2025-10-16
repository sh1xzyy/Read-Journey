import css from "./SubmitButton.module.css";
const SubmitButton = ({ label }) => {
  return (
    <button className={css.submitBtn} type="submit">
      {label}
    </button>
  );
};

export default SubmitButton;
