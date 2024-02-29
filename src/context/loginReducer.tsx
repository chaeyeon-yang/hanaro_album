import { TUserInfo, TLoginAction } from "../type/user/userInfo";
import { saveStateToLocalStorage } from "../util/localStorage";

export const LoginReducer = (
    state: TUserInfo,
    action: TLoginAction
): TUserInfo => {
    switch (action.type) {
        case "LOGIN": {
            const newState = {
                ...state,
                id: action.value.id,
                name: action.value.name,
                username: action.value.username,
                isLogin: true,
            };
            saveStateToLocalStorage("loginState", newState);
            return newState;
        }
        default:
            throw new Error("알수없는 액션입니다.");
    }
};
