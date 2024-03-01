import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedLoginReducer from "./stateConfig";

const store = configureStore({
    reducer: persistedLoginReducer,
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
