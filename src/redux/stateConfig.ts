import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { LoginReducer } from "../context/loginReducer";

const persistConfig = {
    key: "loginState",
    storage,
    whitelist: ["id", "name", "username", "isLogin"],
};

const persistedLoginReducer = persistReducer(persistConfig, LoginReducer);
export default persistedLoginReducer;
