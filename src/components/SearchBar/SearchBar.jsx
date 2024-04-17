import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export const SearchBox = ({ onSearch }) => {
    const [error, setError] = useState("");

    const handleSubmit = (values, { resetForm }) => {
        if (!values.query) {
            setError("Enter text for search");
        } else {
            onSearch(values.query);
            resetForm();
            setError(""); 
        }
    };

    return (
        <>
            <header className={css.header}>
                <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
                    <Form className={css.form}>
                        <Field
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
                    </Form>
                </Formik>
            </header>
            <ErrorMessage error={error} clearError={() => setError("")} /> 
        </>
    );
};

export default SearchBox;
