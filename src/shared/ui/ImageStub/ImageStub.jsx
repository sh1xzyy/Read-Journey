import clsx from "clsx";
import css from "./ImageStub.module.css";

const ImageStub = ({ type }) => {
  return (
    <div
      className={clsx(
        css.stubIconWrapper,
        type === "library" && css.stubIconLibraryWrapper,
        type === "modal" && css.stubIconModalWrapper
      )}
    >
      <svg className={css.stubIcon}>
        <use href="/icons/icons.svg#icon-open-book"></use>
      </svg>
    </div>
  );
};

export default ImageStub;
