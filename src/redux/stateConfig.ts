import { persistReducer } from "redux-persist";
import { AlbumDetailReducer, AlbumReducer } from "../reducer/albumReducer";
import storage from "redux-persist/es/storage";
import { LoginReducer } from "../reducer/loginReducer";

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

const albumDetailPersistConfig = {
    key: "selectedAlbumState",
    storage,
    whitelist: ["userId", "id", "title"],
};

const persistedLoginReducer = persistReducer(loginPersistConfig, LoginReducer);
const persistedAlbumReducer = persistReducer(albumPersistConfig, AlbumReducer);
const persistedAlbumDetailReducer = persistReducer(
    albumDetailPersistConfig,
    AlbumDetailReducer
);

export {
    persistedLoginReducer,
    persistedAlbumReducer,
    persistedAlbumDetailReducer,
};
