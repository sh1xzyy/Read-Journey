import { useDispatch } from "react-redux";
import css from "./LogoutButton.module.css";
import { logoutUserThunk } from "../../../../entities/user/model/operations";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    try {
      dispatch(logoutUserThunk()).unwrap();
      toast.success("Successfully logout");
      <Navigate to="/login" />;
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <button className={css.logoutButton} type="button" onClick={onClick}>
      Log out
    </button>
  );
};

export default LogoutButton;
