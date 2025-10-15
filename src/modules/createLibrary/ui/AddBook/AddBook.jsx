import { useForm } from "react-hook-form";
import css from "./AddBook.module.css";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import Input from "../../../../shared/ui/inputs/Input";
import { addBookThunk } from "../../../../entities/book/model/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema } from "./schema/addBookSchema";
import { useModalCreatedCategoryContext } from "../../../../context/ModalCreatedCategoryContext/useModalCreatedCategoryContext";

const AddBook = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addBookSchema),
  });
  const { setIsCreatedCategoryModalOpen } = useModalCreatedCategoryContext();

  const onSubmit = async (values) => {
    try {
      await dispatch(addBookThunk(values)).unwrap();
      setIsCreatedCategoryModalOpen(true);
      toast.success("Successfully added new book");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form className={css.addBookForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <Input
          {...register("title")}
          hint="Book title:"
          label="Create your library:"
          id="title"
          error={errors?.title}
        />
        <Input
          {...register("author")}
          hint="The author:"
          id="author"
          error={errors?.author}
        />
        <Input
          type="number"
          {...register("totalPages")}
          hint="Number of pages:"
          id="totalPages"
          error={errors?.totalPages}
        />
      </div>
      <button className={css.submitBtn} type="submit">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
