import { useDispatch } from "react-redux";
import css from "./ReadingProgressItem.module.css";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { deleteReadingBookByIdThunk } from "../../../../entities/book/model/operations";
import toast from "react-hot-toast";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("uk-UA");
};

const ReadingProgressItem = ({ bookId, progress, totalPages }) => {
  const dispatch = useDispatch();
  const isFinished = !!progress.finishReading;
  const pagesRead = isFinished ? progress.finishPage - progress.startPage : 0;
  const diffMs = isFinished
    ? new Date(progress.finishReading) - new Date(progress.startReading)
    : 0;
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  let formattedTime;
  if (totalDays > 0) {
    formattedTime = `${totalDays} d ${totalHours % 24} h`;
  } else if (totalHours > 0) {
    formattedTime = `${totalHours} h ${totalMinutes % 60} min`;
  } else if (totalMinutes > 0) {
    formattedTime = `${totalMinutes} min`;
  } else {
    formattedTime = `${totalSeconds} sec`;
  }

  const percent =
    isFinished && totalPages > 0
      ? ((pagesRead / totalPages) * 100).toFixed(1)
      : 0;

  const date = formatDate(progress.startReading);

  const speedData =
    isFinished && pagesRead > 0
      ? [
          { page: progress.startPage, speed: 0 },
          {
            page: Math.floor((progress.startPage + progress.finishPage) / 2),
            speed: progress.speed / 2,
          },
          { page: progress.finishPage, speed: progress.speed },
        ]
      : [
          { page: 0, speed: 0 },
          { page: 1, speed: 0 },
        ];

  const handleDelete = async (values) => {
    try {
      await dispatch(deleteReadingBookByIdThunk(values)).unwrap();
      toast.success("Reading session deleted");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className={css.item}>
      <div className={css.marker}></div>

      <div className={css.content}>
        <div className={css.left}>
          <span className={css.date}>{date}</span>

          <div className={css.infoWrapper}>
            <span className={css.percent}>{percent}%</span>
            <span className={css.minutes}>{formattedTime}</span>
          </div>
        </div>

        <div className={css.right}>
          <span className={css.pages}>{pagesRead} pages</span>
          <div className={css.chartWrapper}>
            <div className={css.chartContentWrapper}>
              <div className={css.chart}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={speedData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id={`colorGreen-${progress._id}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#22c55e"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#16a34a"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="speed"
                      stroke="#22c55e"
                      fill={`url(#colorGreen-${progress._id})`}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <span className={css.speed}>
                {progress?.speed || 0} pages per hour
              </span>
            </div>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => handleDelete({ bookId, readingId: progress?._id })}
            >
              <svg className={css.deleteIcon} width={14} height={14}>
                <use href="/icons/icons.svg#icon-trash"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingProgressItem;
