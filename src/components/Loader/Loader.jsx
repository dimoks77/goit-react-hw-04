import { ProgressBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="300"
      width="80"
      color="#4fa94d"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
