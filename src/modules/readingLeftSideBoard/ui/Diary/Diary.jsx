import css from "./Diary.module.css";
import ReadingProgressItem from "../ReadingProgressItem/ReadingProgressItem";
import DashboardCard from "../../../../shared/ui/DashBoardCard/DashBoardCard";

const Diary = ({ book }) => {
  const { _id, progress = [], totalPages } = book;

  return (
    <DashboardCard type="diary">
      <div className={css.list}>
        {progress.map((progress, i) => (
          <ReadingProgressItem
            key={i}
            progress={progress}
            bookId={_id}
            totalPages={totalPages}
          />
        ))}
      </div>
    </DashboardCard>
  );
};

export default Diary;
