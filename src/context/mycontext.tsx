import React, { createContext, Dispatch, useReducer } from "react";
import { Provider } from "react-redux";
import { TUserInfo, TLoginAction } from "../type/user/userInfo";
import { AlbumReducer, initialAlbumState } from "./albumReducer";
import { TAlbum, TAlbumAction } from "../type/album/albumInfo";
import { Reducer } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { initialState, LoginReducer } from "./loginReducer";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<TUserInfo, TLoginAction>>(
        LoginReducer,
        initialState
    );
    const [albumState, albumDispatch] = useReducer<
        Reducer<TAlbum[], TAlbumAction>
    >(AlbumReducer, initialAlbumState);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContext.Provider value={{ state, dispatch }}>
                    <AlbumContext.Provider
                        value={{ albumState, albumDispatch }}
                    >
                        {children}
                    </AlbumContext.Provider>
                </AppContext.Provider>
            </PersistGate>
        </Provider>
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
    albumState: TAlbum[];
    albumDispatch: Dispatch<TAlbumAction>;
}>({
    albumState: initialAlbumState,
    albumDispatch: () => null,
});

export { AppContext, AlbumContext, AppProvider };
