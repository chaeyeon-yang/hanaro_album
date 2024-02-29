export type TAlbum = {
    userId: number;
    id: number;
    title: string;
};

export type TAlbumAction = { type: "ALBUM"; value: TAlbum };
