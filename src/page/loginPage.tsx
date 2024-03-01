import { useContext, useEffect, useState } from "react";
import { ValidateID } from "../util/validateID";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/mycontext";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const context = useContext(AppContext);

    const [errorMsg, setErrorMsg] = useState<string>("");
    const [userId, setUserId] = useState<number>(0);

    useEffect(() => {
        localStorage.removeItem("loginState");
        context.dispatch({
            type: "LOGIN",
            value: {
                id: 0,
                name: "",
                username: "",
                isLogin: false,
            },
        });
    }, []);

    const handleUserInput = (id: string) => {
        if (ValidateID(id) || !id) {
            setErrorMsg("");
            setUserId(parseInt(id));
        } else {
            setErrorMsg("User ID는 1~10번만 가능합니다.");
        }
    };

    const handleLogin = () => {
        if (!userId) {
            setErrorMsg("값을 입력해주세요.");
        } else {
            const url = "https://jsonplaceholder.typicode.com/users/" + userId;
            axios.get(url).then((res) => {
                console.log(res.data);
                context.dispatch({
                    type: "LOGIN",
                    value: {
                        id: userId,
                        name: res.data.name,
                        username: res.data.username,
                        isLogin: true,
                    },
                });
                console.log("로그인페이지에서 호출한", context.state.id);
                navigate("/albums");
            });
        }
    };

    return (
        <div className="flex justify-center mt-10 relative">
            <div className="relative">
                <input
                    type="text"
                    placeholder="User ID"
                    className="relative border rounded-lg py-2 px-3.5 pl-9 mr-4 bg-loginImage bg-no-repeat bg-sm bg-left"
                    onChange={(e) => handleUserInput(e.target.value)}
                />
                <div className="absolute top-full text-red-500">{errorMsg}</div>

                <button
                    className={`bg-btnColor text-white font-bold px-3.5 py-2 rounded-lg cursor-pointer ${
                        errorMsg ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!!errorMsg}
                    onClick={handleLogin}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
