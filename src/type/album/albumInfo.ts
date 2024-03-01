export type TAlbum = {
    userId: number;
    id: number;
    title: string;
};

export type TAlbumAction =
    | { type: "SELECTED_ALBUM"; value: TAlbum }
    | { type: "ALBUM_LIST"; value: TAlbum[] };

export type TAlbumPhoto = {
    albumId: number;
    id: number;
    title: string;
    thumbnailUrl: string;
};
