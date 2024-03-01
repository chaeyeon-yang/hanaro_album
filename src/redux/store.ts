import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedLoginReducer, persistedAlbumReducer } from "./stateConfig";

const store = configureStore({
    reducer: {
        login: persistedLoginReducer,
        album: persistedAlbumReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
