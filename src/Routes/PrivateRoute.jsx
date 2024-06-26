import {  useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-primary text-center mt-12"></span>

    }

    if(user?.email){
        return children;
    }


    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;