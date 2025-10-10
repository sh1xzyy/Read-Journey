import { useForm } from "react-hook-form";
import css from "./AddBook.module.css";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import Input from "../../../../shared/ui/inputs/Input";
import { addBookThunk } from "../../../../entities/book/model/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema } from "./schema/addBookSchema";

const AddBook = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addBookSchema),
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(addBookThunk(values)).unwrap();
      toast.success("Successfully added new book");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form className={css.addBookForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.addBookLabel}>Create your library:</h2>
      <div className={css.wrapper}>
        <div>
          <Input {...register("title")} label="Book title:" />
          {errors.title && (
            <span className={css.errorMsg}>{errors.title.message}</span>
          )}
        </div>
        <div>
          <Input {...register("author")} label="The author:" />
          {errors.author && (
            <span className={css.errorMsg}>{errors.author.message}</span>
          )}
        </div>
        <div>
          <Input
            type="number"
            {...register("totalPages")}
            label="Number of pages:"
          />
          {errors.author && (
            <span className={css.errorMsg}>{errors.author.message}</span>
          )}
        </div>
      </div>
      <button className={css.submitBtn} type="submit">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
