import { TAlbum } from "../type/album/albumInfo";
import { TUserInfo } from "../type/user/userInfo";

const saveStateToLocalStorage = (
    key: string,
    state: TUserInfo | TAlbum[] | TAlbum
) => {
    localStorage.setItem(key, JSON.stringify(state));
};

const getStateFromLocalStorage = (key: string) => {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : {};
};

export { saveStateToLocalStorage, getStateFromLocalStorage };
