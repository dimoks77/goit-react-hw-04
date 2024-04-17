import toast from "react-hot-toast";

export const ErrorMessage = ( error ) => {
    
    toast.error(error);
  };
  
  export default ErrorMessage;