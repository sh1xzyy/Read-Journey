import css from "./MyLibraryStub.module.css";
const MyLibraryStub = () => {
  return (
    <div className={css.myLibraryStubWrapper}>
      <div className={css.myLibraryStubContentWrapper}>
        <div className={css.myLibraryStubImg}>
          <picture>
            <source
              srcSet="/common/book-tablet@1x.png 1x, /common/book-tablet@2x.png 2x"
              media="(min-width: 768px)"
            />
            <img
              src="/common/book-mobile@1x.png"
              srcSet="/common/book-mobile@1x.png 1x, /common/book-mobile@2x.png 2x"
              alt="book"
              loading="lazy"
            />
          </picture>
        </div>
        <p className={css.myLibraryStubText}>
          To start training, add <span>some of your books</span> or from the
          recommended ones
        </p>
      </div>
    </div>
  );
};

export default MyLibraryStub;
