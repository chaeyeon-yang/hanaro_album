import { Dispatch, createContext, useReducer } from "react";
import { TUserInfo, TLoginAction } from "../type/user/userInfo";
import { LoginReducer } from "./LoginReducer";

const initialState: TUserInfo = {
    id: 0,
    name: "",
    username: "",
    isLogin: false,
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(LoginReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

const AppContext = createContext<{
    state: TUserInfo;
    dispatch: Dispatch<TLoginAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

export { AppContext, AppProvider };
