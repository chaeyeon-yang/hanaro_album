import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/mycontext";
import { TAuthRoute } from "../type/common/common";

const AuthWrapper = ({ children }: TAuthRoute) => {
    const context = useContext(AppContext);
    const isAuthenticated = context.state.isLogin;

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default AuthWrapper;
