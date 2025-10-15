import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ReadingTimeline = ({ progress }) => {
  return (
    <VerticalTimeline layout="1-column-left" lineColor="#3b3b3b">
      {progress.map((session, i) => (
        <VerticalTimelineElement
          key={i}
          date={new Date(session.startReading).toLocaleDateString("uk-UA")}
          iconStyle={{
            background: "#22c55e",
            color: "#fff",
            boxShadow: "0 0 0 2px #3b3b3b",
          }}
          icon={
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: "#22c55e",
              }}
            />
          }
          contentStyle={{ background: "#1e1e1e", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
        >
          <h4>
            {(
              ((session.finishPage - session.startPage) / session.totalPages) *
              100
            ).toFixed(1)}
            %
          </h4>
          <p>{session.finishPage - session.startPage} pages</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ReadingTimeline;
