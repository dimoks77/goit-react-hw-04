import css from './LoadMoreBtn.module.css'

export const LoadMoreBtn = ( {loadMore}) => {
    
    return (
        <footer>
            <button onClick={loadMore} className={css.btn} type="submit">Load More</button>
        </footer>
       
    );
  };
  
  export default LoadMoreBtn;