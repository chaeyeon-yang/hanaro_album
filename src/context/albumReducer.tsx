import { TAlbumAction, TAlbum } from "../type/album/albumInfo";

export const initialAlbumState: TAlbum = {
    userId: 0,
    id: 0,
    title: "",
};

export const AlbumReducer = (
    state = initialAlbumState,
    action: TAlbumAction
): TAlbum => {
    switch (action.type) {
        case "ALBUM": {
            const newState = {
                ...state,
                userId: action.value.userId,
                id: action.value.id,
                title: action.value.title,
            };
            return newState;
        }
        default:
            throw new Error("알수없는 액션입니다.");
    }
};
