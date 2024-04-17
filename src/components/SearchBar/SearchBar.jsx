import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";

export const SearchBox = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === '') {
        toast.error("Enter text for search!");
        return;  
    }
    onSearch(event.target.elements.query.value.trim());
    event.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          autoComplete="off"
          autoFocus
          type="text"
          name="query"
          placeholder="Search images with photos"
        />
        <button type="submit" className={css.btn}>
          <IoIosSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBox;
