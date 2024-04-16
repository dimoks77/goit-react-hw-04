import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

export const SearchBox = ({ onSearch }) => {
    const handleSubmit = (value, actions) => {
        !value.query
          ? toast("Please enter text", {
              style: {
                color: "#ffffff",
                backgroundColor: "#FF8C00",
              },
            })
          : onSearch(value.query);
    
        // actions.resetForm();
      };

  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            autoComplete="off"
            autoFocus
            type="text"
            name="query"
            placeholder=""
          />
            {/* <IoIosSearch className={css.icon} onSubmit={handleSubmit} /> */}
            <button className={css.btn} onClick={handleSubmit}>
                <IoIosSearch className={css.icon} />
            </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBox;
