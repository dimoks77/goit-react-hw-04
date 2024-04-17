import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import toast from 'react-hot-toast';

export const SearchBox = ({ onSearch }) => {
    const handleSubmit = (evt, values) => {
        evt.preventDefault();
        if (!values.query) {
            toast.error("Please enter text");
        } else {
            onSearch(values.query);
            // resetForm();
        }
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
                        placeholder="search images with photos"
                    />
                    <button type="submit" className={css.btn}>
                        <IoIosSearch className={css.icon} />
                    </button>
                </Form>
            </Formik>
        </header>
    );
};

export default SearchBox;
