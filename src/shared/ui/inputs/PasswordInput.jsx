import { useState, forwardRef } from "react";
import css from "./Input.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PiWarningCircleBold } from "react-icons/pi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PasswordInput = forwardRef(
  ({ error, isSubmitted, value, onChange, ...props }, ref) => {
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);

    return (
      <div className={css.passwordWrapper}>
        <div className={css.passwordInputWrapper}>
          <input
            ref={ref}
            type={isPasswordOpen ? "text" : "password"}
            className={css.passwordInput}
            value={value ?? ""}
            onChange={(e) => {
              if (typeof onChange === "function") onChange(e);
            }}
            {...props}
          />
          <span className={css.label}>Password:</span>
        </div>

        <button
          type="button"
          className={css.passwordButton}
          onClick={() => setIsPasswordOpen((prev) => !prev)}
        >
          {!isSubmitted ? (
            isPasswordOpen ? (
              <FiEye className={css.icon} color="var(--color-white)" />
            ) : (
              <FiEyeOff className={css.icon} color="var(--color-white)" />
            )
          ) : error ? (
            <PiWarningCircleBold
              className={css.icon}
              color="var(--color-red)"
            />
          ) : (
            <IoCheckmarkCircleOutline
              className={css.icon}
              color="var(--color-green)"
            />
          )}
        </button>
      </div>
    );
  }
);

export default PasswordInput;
