import { useContext } from "react";
import { AppContext } from "../context/mycontext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const context = useContext(AppContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        context.dispatch({
            type: "LOGOUT",
            value: {
                id: 0,
                name: "",
                username: "",
                isLogin: false,
            },
        });
        navigate("/");
    };

    return (
        <div className="flex items-center justify-between w-full bg-mainColor rounded-lg px-6 py-5 mt-2">
            <div className=" text-2xl font-semibold  text-white ">
                Hanaro Album
            </div>
            {context.state.isLogin ? (
                <div className="flex items-center">
                    <div className="text-lg font-bold text-slate-600 mr-2">
                        {context.state.id}
                    </div>
                    <div className="text-lg font-bold mr-4">
                        {context.state.name}
                    </div>
                    <button
                        className="bg-btnColor text-white font-bold px-3.5 py-2 rounded-lg cursor-pointer"
                        onClick={handleLogout}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Header;
