import { persistReducer } from "redux-persist";
import { AlbumReducer } from "../context/albumReducer";
import storage from "redux-persist/es/storage";
import { LoginReducer } from "../context/loginReducer";

const loginPersistConfig = {
    key: "loginState",
    storage,
    whitelist: ["id", "name", "username", "isLogin"],
};

const albumPersistConfig = {
    key: "albumListState",
    storage,
    whitelist: [],
};

const persistedLoginReducer = persistReducer(loginPersistConfig, LoginReducer);
const persistedAlbumReducer = persistReducer(albumPersistConfig, AlbumReducer);

export { persistedLoginReducer, persistedAlbumReducer };
