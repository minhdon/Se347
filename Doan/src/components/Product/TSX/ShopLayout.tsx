import { Filter } from "./Filter";
import styles from "../CSS/ShopLayout.module.css";
import { Sort } from "./SortHeader";
export const ShopLayout = () => {
  return (
    <section className={styles["shop-layout"]}>
      <Filter />
      <Sort />
    </section>
  );
};
