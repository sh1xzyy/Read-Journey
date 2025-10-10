import FiltersForm from "./ui/FiltersForm/FiltersForm";
import PromoCard from "./ui/PromoCard/PromoCard";
import css from "./Filters.module.css";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import QuoteCard from "./ui/QuoteCard/QuoteCard";
import DashBoard from "../../shared/ui/DashBoard/DashBoard";

const Filters = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <DashBoard type="filters">
      <div className={css.filterWrapper}>
        <FiltersForm />
        <PromoCard />
        {windowWidth >= 1280 && <QuoteCard />}
      </div>
    </DashBoard>
  );
};

export default Filters;
