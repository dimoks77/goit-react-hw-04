import css from './LoadMoreBtn.module.css'

export const LoadMoreBtn = () => {
    return (
        <footer>
            <button className={css.btn} type="submit">Load More</button>
        </footer>
       
    );
  };
  
  export default LoadMoreBtn;