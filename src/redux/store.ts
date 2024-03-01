import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import {
    persistedLoginReducer,
    persistedAlbumReducer,
    persistedAlbumDetailReducer,
} from "./stateConfig";

const rootReducer = combineReducers({
    login: persistedLoginReducer,
    album: persistedAlbumReducer,
    albumDetail: persistedAlbumDetailReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
