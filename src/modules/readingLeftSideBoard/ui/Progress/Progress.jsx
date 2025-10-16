import css from "./Progress.module.css";
const Progress = () => {
  return (
    <div>
      <h2 className={css.progressTitle}>Progress</h2>
      <p className={css.progressDescription}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className={css.progressImgWrapper}>
        <picture>
          <source
            srcSet="/progress/star-tablet@1x.png 1x, /progress/star-tablet@2x.png 2x"
            media="(min-width: 768px)"
          />
          <img
            src="/progress/star-mobile@1x.png"
            srcSet="/progress/star-mobile@1x.png 1x, /progress/star-mobile@2x.png 2x"
            alt="star"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Progress;
