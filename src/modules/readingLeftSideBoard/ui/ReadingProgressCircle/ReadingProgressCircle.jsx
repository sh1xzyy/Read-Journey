import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import css from "./ReadingProgressCircle.module.css";

const ReadingProgressCircle = ({ percentage, pagesRead }) => {
  const normalizedPercentage = Math.min(percentage, 100);

  const data = [
    { value: normalizedPercentage },
    { value: 100 - normalizedPercentage },
  ];

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius="71%"
                outerRadius="86%"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
                cornerRadius={10}
              >
                <Cell fill="var(--color-green)" />
                <Cell fill="var(--color-dark-grey)" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className={css.centerText}>
            <p className={css.percentageText}>100%</p>
          </div>
        </div>

        <div className={css.info}>
          <div className={css.indicator}></div>
          <div>
            <p className={css.percentageValue}>{percentage}%</p>
            <p className={css.pagesText}>{pagesRead} pages read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingProgressCircle;
