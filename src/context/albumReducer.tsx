import { TAlbumAction, TAlbum } from "../type/album/albumlist";

export const AlbumReducer = (state: TAlbum, action: TAlbumAction): TAlbum => {
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
