import css from './SearchBar.module.css';

export const SearchBox = ({onSearch}) => {
    const handleSubmit = e => {
        e.preventDefault();
        
        if (e.target.elements.query.value.trim() === '') {
            console.log('Empty string!');
            return;
        }

        onSearch(e.target.elements.query.value);
        e.target.reset();
    }

    return (
<header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>
    <input className={css.input} name="query"
      type="text" autoComplete="off" autoFocus placeholder="Search images and photos"
    />
    <button type="submit" className={css.btn}>Search</button>
  </form>
</header>
    );
  };
  
  export default SearchBox;