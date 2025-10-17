import { useForm } from "react-hook-form";
import css from "./AddBook.module.css";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import Input from "../../../../shared/ui/inputs/Input";
import { addBookThunk } from "../../../../entities/book/model/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema } from "./schema/addBookSchema";
import { useModalCreatedCategoryContext } from "../../../../context/ModalCreatedCategoryContext/useModalCreatedCategoryContext";
import Button from "../../../../shared/ui/Button/Button";
import { selectOwnBooks } from "../../../../entities/book/model/selectors";

const AddBook = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addBookSchema),
  });
  const { setIsCreatedCategoryModalOpen } = useModalCreatedCategoryContext();
  const ownBooks = useSelector(selectOwnBooks);

  const onSubmit = async (values) => {
    try {
      if (ownBooks.some((book) => book.title === values.title)) {
        return toast.error("That book is already exist");
      }
      await dispatch(addBookThunk(values)).unwrap();
      setIsCreatedCategoryModalOpen(true);
      reset();
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

      <Button label="Add Book" type="submit" />
    </form>
  );
};

export default AddBook;
