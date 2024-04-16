import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button id="loadMore" onClick={loadMore} className={css.btn} type="submit">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
