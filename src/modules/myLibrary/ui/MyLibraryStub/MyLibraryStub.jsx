import css from "./MyLibraryStub.module.css";
const MyLibraryStub = () => {
  return (
    <div className={css.myLibraryStubWrapper}>
      <div className={css.myLibraryStubContentWrapper}>
        <div className={css.myLibraryStubImg}>
          <picture>
            <source
              srcSet="/myLibrary/book-tablet@1x.png 1x, /myLibrary/book-tablet@2x.png 2x"
              media="(min-width: 768px)"
            />
            <img
              src="/myLibrary/book-mobile@1x.png"
              srcSet="/myLibrary/book-mobile@1x.png 1x, /myLibrary/book-mobile@2x.png 2x"
              alt="book"
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
