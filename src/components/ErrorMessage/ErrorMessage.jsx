import { useEffect } from 'react';
import toast from "react-hot-toast";

const ErrorMessage = ({ error, clearError }) => {
    useEffect(() => {
        if (error) {
            toast.error(error);
            clearError();
        }
    }, [error, clearError]);

    return null;
};

export default ErrorMessage;
