import { Dispatch, createContext, useReducer } from "react";
import { TUserInfo, TLoginAction } from "../type/user/userInfo";
import { LoginReducer } from "./loginReducer";
import { AlbumReducer } from "./albumReducer";
import { TAlbum, TAlbumAction } from "../type/album/albumInfo";

const initialState: TUserInfo = {
    id: 0,
    name: "",
    username: "",
    isLogin: false,
};

const initialAlbumState: TAlbum = {
    userId: 0,
    id: 0,
    title: "",
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(LoginReducer, initialState);
    const [albumState, albumDispatch] = useReducer(
        AlbumReducer,
        initialAlbumState
    );

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <AlbumContext.Provider value={{ albumState, albumDispatch }}>
                {children}
            </AlbumContext.Provider>
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

const AlbumContext = createContext<{
    albumState: TAlbum;
    albumDispatch: Dispatch<TAlbumAction>;
}>({
    albumState: initialAlbumState,
    albumDispatch: () => null,
});

export { AppContext, AlbumContext, AppProvider };
