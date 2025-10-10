import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import css from "../styles/formStyles.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../../entities/user/model/operations";
import toast from "react-hot-toast";
import Input from "../../../shared/ui/inputs/Input";
import PasswordInput from "../../../shared/ui/inputs/PasswordInput";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    watch,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (values) => {
    try {
      const response = await dispatch(loginUserThunk(values)).unwrap();
      toast.success(`Welcome ${response?.name}`);
      <Navigate to="/recommended" />;
    } catch (error) {
      toast.error(error);
    }
  };

  const passwordValue = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <div>
          <Input {...register("email")} label="Mail:" />
          {errors.email && (
            <span className={css.errorMsg}>{errors.email.message}</span>
          )}
        </div>
        <div>
          <PasswordInput
            {...register("password")}
            error={errors.password}
            isSubmitted={isSubmitted}
            value={passwordValue}
          />
          {errors.password && (
            <span className={css.errorMsg}>{errors.password.message}</span>
          )}
        </div>
      </div>

      <div className={css.buttonsWrapper}>
        <button className={css.submitBtn} type="submit">
          Log in
        </button>

        <Link className={css.registerLink} to="/register">
          Don’t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
