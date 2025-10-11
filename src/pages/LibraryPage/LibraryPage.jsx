import CreateLibrary from "../../modules/createLibrary/CreateLibrary";
import MyLibrary from "../../modules/myLibrary/MyLibrary";
import css from "./LibraryPage.module.css";

const LibraryPage = () => {
  return (
    <div className="container">
      <div className={css.libraryPageWrapper}>
        <section className={css.firstSection}>
          <CreateLibrary />
        </section>

        <section className={css.section}>
          <MyLibrary />
        </section>
      </div>
    </div>
  );
};

export default LibraryPage;
