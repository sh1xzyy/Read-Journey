import CreateLibrary from "../../modules/createLibrary/CreateLibrary";
import css from "./LibraryPage.module.css";

const LibraryPage = () => {
  return (
    <div>
      <section className={css.firstSection}>
        <div className="container">
          <CreateLibrary />
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;
