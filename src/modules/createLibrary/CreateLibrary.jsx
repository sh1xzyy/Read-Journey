import DashBoard from "../../shared/ui/DashBoard/DashBoard";

import css from "./CreateLibrary.module.css";
import { useDispatch } from "react-redux";
import { getRecommendedBooksThunk } from "../../entities/book/model/operations";
import { useEffect, useState } from "react";
import AddBook from "./ui/AddBook/AddBook";
import RecommendedBooks from "./ui/RecommendedBooks/RecommendedBooks";

const CreateLibrary = () => {
  const dispatch = useDispatch();
  const [curPage, setCurPage] = useState(1);
  console.log(curPage);

  useEffect(() => {
    (async () => {
      await dispatch(
        getRecommendedBooksThunk({ limit: 3, page: curPage })
      ).unwrap();
    })();
  }, [curPage, dispatch]);

  return (
    <DashBoard type="filters">
      <div className={css.createLibraryWrapper}>
        <AddBook />
        <RecommendedBooks setCurPage={setCurPage} />
      </div>
    </DashBoard>
  );
};

export default CreateLibrary;
