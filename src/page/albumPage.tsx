import { useContext, useEffect, useState } from "react";
import { AlbumContext, AppContext } from "../context/mycontext";
import axios from "axios";
import { TAlbum } from "../type/album/albumInfo";
import { useNavigate } from "react-router-dom";

const AlbumPage = () => {
    const navigate = useNavigate();
    const context = useContext(AppContext);
    const albumContext = useContext(AlbumContext);
    const [albumlist, setAlbumList] = useState<TAlbum[]>();
    const [selectAlbum, setSelectAlbum] = useState<TAlbum>({
        userId: context.state.id,
        id: -1,
        title: "",
    });
    useEffect(() => {
        const id = context.state.id;
        const url = "https://jsonplaceholder.typicode.com/albums?userId=" + id;

        axios
            .get(url)
            .then((res) => {
                setAlbumList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleAlbumClick = (item: TAlbum) => {
        albumContext.albumDispatch({
            type: "ALBUM",
            value: {
                userId: context.state.id,
                id: item.id,
                title: item.title,
            },
        });
        setSelectAlbum({ ...item });
        console.log("사용자가 선택한", item.id);
        // console.log(albumContext.albumState.id, "선택됨");
    };

    const albumDetail = () => {
        if (selectAlbum.id) {
            navigate(`/albums/${selectAlbum.id}`);
        }
    };

    return (
        <div className="flex flex-col mt-10 px-10 mb-20">
            <div className="flex items-center gap-4 mb-10">
                <div className="text-2xl font-semibold">앨범 목록</div>
                <button
                    className="bg-btnColor text-white font-bold py-2 px-3.5 rounded-lg cursor-pointer"
                    onClick={albumDetail}
                >
                    앨범 상세보기
                </button>
            </div>
            <div className="flex flex-col gap-5">
                {albumlist?.map((album, index) => {
                    return (
                        <div
                            key={index}
                            className={`text-lg px-4 py-2 cursor-pointer ${
                                selectAlbum.id === album.id ||
                                albumContext.albumState.id === album.id
                                    ? "bg-slate-300"
                                    : "bg-white"
                            } hover:bg-slate-300 focus:bg-slate-300 rounded-lg`}
                            onClick={() => handleAlbumClick(album)}
                        >
                            {index + 1}. {album.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default AlbumPage;
