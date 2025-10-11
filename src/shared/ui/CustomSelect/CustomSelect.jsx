import Select from "react-select";
import useWindowWidth from "../../hooks/useWindowWidth";

const options = [
  { value: "unread", label: "Unread" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "all", label: "All books" },
];

export default function CustomSelect() {
  const { windowWidth } = useWindowWidth();
  const isTablet = windowWidth >= 768;
  return (
    <Select
      options={options}
      defaultValue={options[3]}
      styles={{
        control: (base) => ({
          ...base,
          height: isTablet ? "46px" : "40px",
          width: isTablet ? "153px" : "120px",
          backgroundColor: "transparent",
          borderRadius: "12px",
          border: "1px solid var(--color-light-grey)",
          fontWeight: 500,
          fontSize: isTablet ? "14px" : "12px",
          lineHeight: isTablet ? 1.28571 : 1.33333,
          letterSpacing: "-0.02em",
          color: "var(--color-white)",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "var(--color-grey)",
          borderRadius: "12px",
          marginTop: "4px",
        }),
        option: (base, state) => ({
          ...base,
          fontWeight: 500,
          fontSize: isTablet ? "14px" : "12px",
          lineHeight: isTablet ? 1.28571 : 1.33333,
          letterSpacing: "-0.02em",
          color: state.isSelected
            ? "var(--color-white)"
            : "var(--color-light-grey)",
          backgroundColor: "transparent",
          cursor: "pointer",
        }),
        singleValue: (base) => ({
          ...base,
          color: "white",
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}
