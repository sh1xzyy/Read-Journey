import { useForm } from "react-hook-form";
import css from "./FiltersForm.module.css";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import Input from "../../../../shared/ui/inputs/Input";
import { getRecommendedBooksThunk } from "../../../../entities/book/model/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { filtersSchema } from "./schema/filtersFormSchema";

const FiltersForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(filtersSchema),
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(getRecommendedBooksThunk(values)).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form className={css.filtersForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <Input
          {...register("title")}
          hint="Book title:"
          label="Filters:"
          error={errors.title}
        />
        <Input
          {...register("author")}
          hint="The author:"
          error={errors.author}
        />
      </div>
      <button className={css.submitBtn} type="submit">
        To apply
      </button>
    </form>
  );
};

export default FiltersForm;
