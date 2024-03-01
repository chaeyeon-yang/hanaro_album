import { Reducer } from "redux";
import { TUserInfo, TLoginAction } from "../type/user/userInfo";
import { saveStateToLocalStorage } from "../util/localStorage";

export const initialState: TUserInfo = {
    id: 0,
    name: "",
    username: "",
    isLogin: false,
};

const LoginReducer: Reducer<TUserInfo, TLoginAction> = (
    state = initialState,
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
        case "LOGOUT": {
            const newState = {
                ...state,
                id: 0,
                name: "",
                username: "",
                isLogin: false,
            };
            saveStateToLocalStorage("loginState", newState);
            return newState;
        }
        default:
            return state;
    }
};

export { LoginReducer };
