import { TAlbumAction, TAlbum } from "../type/album/albumInfo";
import {
    getStateFromLocalStorage,
    saveStateToLocalStorage,
} from "../util/localStorage";

const selectedAlbumState = getStateFromLocalStorage("selectedAlbumState");
export const initialSelectedAlbumState: TAlbum = selectedAlbumState;
export const initialAlbumState: TAlbum[] = [];

export const AlbumDetailReducer = (
    state = initialSelectedAlbumState,
    action: TAlbumAction
): TAlbum => {
    switch (action.type) {
        case "SELECTED_ALBUM": {
            saveStateToLocalStorage("selectedAlbumState", action.value);
            return action.value;
        }
        default:
            return state;
    }
};

export const AlbumReducer = (
    state = initialAlbumState,
    action: TAlbumAction
): TAlbum[] => {
    switch (action.type) {
        case "ALBUM_LIST": {
            const newState = [...action.value];
            saveStateToLocalStorage("albumListState", newState);
            return newState;
        }
        default:
            return state;
    }
};
