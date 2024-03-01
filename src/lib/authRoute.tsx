import { Navigate } from "react-router-dom";
import { TAuthRoute } from "../type/common/common";

const AuthWrapper = ({ children }: TAuthRoute) => {
    const login = JSON.parse(localStorage.getItem("loginState") || "{}");
    const isAuthenticated = login.isLogin === true ? true : false;

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default AuthWrapper;
