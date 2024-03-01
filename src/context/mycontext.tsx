import React, { createContext, Dispatch, useReducer } from "react";
import { Provider } from "react-redux";
import { TUserInfo, TLoginAction } from "../type/user/userInfo";
import {
    AlbumDetailReducer,
    AlbumReducer,
    initialAlbumState,
    initialSelectedAlbumState,
} from "./albumReducer";
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

    const [albumDetailState, albumDetailDispatch] = useReducer<
        Reducer<TAlbum, TAlbumAction>
    >(AlbumDetailReducer, initialSelectedAlbumState);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContext.Provider value={{ state, dispatch }}>
                    <AlbumContext.Provider
                        value={{
                            albumState,
                            albumDispatch,
                        }}
                    >
                        <AlbumDetailContext.Provider
                            value={{ albumDetailState, albumDetailDispatch }}
                        >
                            {children}
                        </AlbumDetailContext.Provider>
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

const AlbumDetailContext = createContext<{
    albumDetailState: TAlbum;
    albumDetailDispatch: Dispatch<TAlbumAction>;
}>({
    albumDetailState: initialSelectedAlbumState,
    albumDetailDispatch: () => null,
});

export { AppContext, AlbumContext, AlbumDetailContext, AppProvider };
