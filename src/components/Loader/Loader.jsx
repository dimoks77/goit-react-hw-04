import { ProgressBar } from "react-loader-spinner";
import css from './Loader.module.css'

export const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="200"
      width="100"
      color="#3747ac"
      borderColor="#3747ac"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
