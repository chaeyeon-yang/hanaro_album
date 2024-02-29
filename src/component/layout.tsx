import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
    return (
        <div className="flex flex-col mx-2">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
