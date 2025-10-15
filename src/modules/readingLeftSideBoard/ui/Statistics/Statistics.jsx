import DashboardCard from "../../../../shared/ui/DashBoardCard/DashBoardCard";
import { calculateProgress } from "../../../../shared/utils/calculateProgress";
import ReadingProgressCircle from "../ReadingProgressCircle/ReadingProgressCircle";
// import css from "./Statistics.module.css";

const Statistics = ({ book }) => {
  const { pagesRead, percentage } = calculateProgress(book);
  return (
    <DashboardCard type="statistic">
      <ReadingProgressCircle pagesRead={pagesRead} percentage={percentage} />
    </DashboardCard>
  );
};

export default Statistics;
