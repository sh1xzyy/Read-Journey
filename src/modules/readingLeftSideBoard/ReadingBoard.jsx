import DashBoard from "../../shared/ui/DashBoard/DashBoard";
import AddBook from "./ui/AddBook/AddBook";
import Progress from "./ui/Progress/Progress";
import css from "./ReadingBoard.module.css";
import { useState } from "react";
import Details from "./ui/Details/Details";

const ReadingBoard = ({ isProgress, isReading, setIsReading }) => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <DashBoard type={isProgress ? "progress" : "reading"}>
      <div className={css.readingBoardWrapper}>
        <AddBook isReading={isReading} setIsReading={setIsReading} />
        {isProgress ? (
          <Details openIndex={openIndex} setOpenIndex={setOpenIndex} />
        ) : (
          <Progress />
        )}
      </div>
    </DashBoard>
  );
};

export default ReadingBoard;
