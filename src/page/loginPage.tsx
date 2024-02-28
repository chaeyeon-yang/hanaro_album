import { useState } from "react";
import { ValidateID } from "../util/validateID";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState<string>("");
    // TODO: context 변수로 변경해야함
    const [userId, setUserId] = useState<number>(0);
    // 사용자 입력 받을 때 디바운스 적용하여
    // 과도한 이벤트 헨들러의 호출을 방지한다.
    const handleUserInput = (id: string) => {
        // 1. 사용자가 입력값을 모두 지운 경우 -> 경고 메세지 안보여주기
        // 2. 사용자가 유효하지 않은 값을 입력한 경우 -> 경고 메세지 보여주기
        // 3. 사용자가 유효한 값을 입력한 경우 -> 경고 메세지 안보여주기

        if (ValidateID(id) || !id) {
            setErrorMsg("");
            setUserId(parseInt(id));
        } else {
            setErrorMsg("User ID는 1~10번만 가능합니다.");
        }
    };

    const handleLogin = () => {
        // 4. 값을 입력하지 않은채 로그인 버튼을 누른 경우
        if (!userId) {
            setErrorMsg("값을 입력해주세요.");
        } else {
            // 유효한 값을 입력한 경우 - 페이지 이동
            navigate("/albums");
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
