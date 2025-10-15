import css from "./PromoCard.module.css";
import DashboardCard from "../../../../shared/ui/DashBoardCard/DashBoardCard";
import CustomLink from "../../../../shared/ui/CustomLink/CustomLink";

const promoData = [
  {
    label: "Create a personal library:",
    description: "add the books you intend to read to it.",
  },
  {
    label: "Create your first workout:",
    description: "define a goal, choose a period, start training.",
  },
];

const PromoCard = () => {
  return (
    <DashboardCard>
      <h2 className={css.promoTitle}>Start your workout</h2>
      <ul className={css.promoList}>
        {promoData.map(({ label, description }, i) => (
          <li className={css.promoItem} key={i}>
            <div className={css.promoNumber}>
              <span>{i + 1}</span>
            </div>
            <div className={css.promoText}>
              <span className={css.promoLabel}>{label}&nbsp;</span>
              <span className={css.promoDescription}>{description}&nbsp;</span>
            </div>
          </li>
        ))}
      </ul>

      <div className={css.buttonsWrapper}>
        <CustomLink to="/library" label="My library" type="2" />

        <button
          className={css.rightButton}
          type="button"
          onClick={() => console.log("doing smth")}
        >
          <svg className={css.promoIcon} width={24} height={24}>
            <use href="/icons/icons.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </DashboardCard>
  );
};

export default PromoCard;
