import { useForm } from "react-hook-form";
import css from "./AddBook.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema } from "./schemas/addBookSchema";
import Input from "../../../../shared/ui/inputs/Input";
import {
  finishReadingBookThunk,
  startReadingBookThunk,
} from "../../../../entities/book/model/operations";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../../../../shared/ui/button/Button";

const AddBook = ({ isReading, setIsReading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addBookSchema) });
  const dispatch = useDispatch();
  const { id } = useParams();

  const onSubmit = async (value) => {
    try {
      if (isReading) {
        await dispatch(finishReadingBookThunk({ id, ...value })).unwrap();
        setIsReading(false);
      } else {
        await dispatch(startReadingBookThunk({ id, ...value })).unwrap();
        setIsReading(true);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form className={css.addBookForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <Input
          {...register("page")}
          hint="Page number:"
          label="Start page:"
          id="email"
          error={errors.page}
        />
      </div>

      <Button label={isReading ? "To stop" : "To start"} type="submit" />
    </form>
  );
};

export default AddBook;
