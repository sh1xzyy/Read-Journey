import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import css from "../styles/formStyles.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/registerSchema";
import { registerUserThunk } from "../../../entities/user/model/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Input from "../../../shared/ui/inputs/Input";
import PasswordInput from "../../../shared/ui/inputs/PasswordInput";
import CustomLink from "../../../shared/ui/CustomLink/CustomLink";
import SubmitButton from "../ui/SubmitButton/SubmitButton";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    watch,
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (values) => {
    try {
      const response = await dispatch(registerUserThunk(values)).unwrap();
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
        <Input {...register("name")} hint="Name:" error={errors.name} />
        <Input {...register("email")} hint="Mail:" error={errors.email} />

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
        <SubmitButton label="Registration" />

        <CustomLink to="/login" label="Already have an account?" type="1" />
      </div>
    </form>
  );
};

export default RegisterForm;
