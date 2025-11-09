import styles from "../CSS/SortHeader.module.css";

export const Sort = () => {
  return (
    <>
      <div className={styles["sort-header"]}>
        <span>Hiển thị 1-12 trên 150 sản phẩm</span>
        <label>
          Sắp xếp theo:
          <select id="sort-by">
            <option value="default">Mặc định</option>
            <option value="best-selling">Độ bán chạy</option>
            <option value="price-asc">Giá: Thấp đến cao</option>
            <option value="price-desc">Giá: Cao đến thấp</option>
          </select>
        </label>
      </div>
    </>
  );
};
