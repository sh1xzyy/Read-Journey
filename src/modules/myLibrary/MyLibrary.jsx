import { useEffect } from "react";
import MyLibraryHeader from "./ui/MyLibraryHeader/MyLibraryHeader";
import { useDispatch, useSelector } from "react-redux";
import { getOwnBooksThunk } from "../../entities/book/model/operations";
import toast from "react-hot-toast";
import MyLibraryList from "./ui/MyLibraryList/MyLibraryList";
import DashBoard from "../../shared/ui/DashBoard/DashBoard";
import MyLibraryStub from "./ui/MyLibraryStub/MyLibraryStub";
import { selectOwnBooks } from "../../entities/book/model/selectors";

const MyLibrary = () => {
  const dispatch = useDispatch();
  const ownBooks = useSelector(selectOwnBooks);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getOwnBooksThunk()).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <DashBoard type="library">
      <MyLibraryHeader ownBooks={ownBooks} />
      {ownBooks?.length > 0 ? (
        <MyLibraryList ownBooks={ownBooks} />
      ) : (
        <MyLibraryStub />
      )}
    </DashBoard>
  );
};

export default MyLibrary;
