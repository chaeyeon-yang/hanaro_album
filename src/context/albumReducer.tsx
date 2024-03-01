import { TAlbumAction, TAlbum } from "../type/album/albumInfo";
import { saveStateToLocalStorage } from "../util/localStorage";

export const initialAlbumState: TAlbum[] = [];

export const AlbumReducer = (
    state = initialAlbumState,
    action: TAlbumAction
): TAlbum[] => {
    switch (action.type) {
        case "SELECTED_ALBUM": {
            const newState = [...state, action.value];
            saveStateToLocalStorage("selectedAlbumState", newState);
            return newState;
        }
        case "ALBUM_LIST": {
            const newState = [...action.value];
            saveStateToLocalStorage("albumListState", newState);
            return newState;
        }
        default:
            return state;
    }
};
