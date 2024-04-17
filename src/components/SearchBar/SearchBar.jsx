import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SearchBox = ({ onSearch }) => {
  const SignupSchema = Yup.object().shape({
    query: Yup.string().required("Enter text for search!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSearch(values.query);
    resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} validationSchema={SignupSchema} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            autoComplete="off"
            autoFocus
            type="text"
            name="query"
            placeholder="Search images with photos"
          />
          <ErrorMessage name="query" render={(msg) => <div className={css.error}>{msg}</div>} />
          <button type="submit" className={css.btn}>
            <IoIosSearch className={css.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBox;
