import { useContext, useEffect, useState } from "react";
import {
    AlbumContext,
    AlbumDetailContext,
    AppContext,
} from "../context/mycontext";
import axios from "axios";
import { TAlbum } from "../type/album/albumInfo";
import { useNavigate } from "react-router-dom";
import { getStateFromLocalStorage } from "../util/localStorage";

const AlbumPage = () => {
    const navigate = useNavigate();
    const context = useContext(AppContext);
    const albumContext = useContext(AlbumContext);
    const albumDetailContext = useContext(AlbumDetailContext);
    const [loading, setLoading] = useState(true);
    const [noticeMsg, setNoticeMsg] = useState("");

    const albumList = getStateFromLocalStorage("albumListState");
    const [selectAlbum, setSelectAlbum] = useState<TAlbum>({
        userId: context.state.id,
        id: -1,
        title: "",
    });
    useEffect(() => {
        const controller = new AbortController();
        const url =
            "https://jsonplaceholder.typicode.com/albums?userId=" +
            context.state.id;
        axios
            .get(url, { signal: controller.signal })
            .then((res) => {
                albumContext.albumDispatch({
                    type: "ALBUM_LIST",
                    value: res.data,
                });
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
        return () => {
            controller.abort();
        };
    }, [context.state.id]);

    const handleAlbumClick = (item: TAlbum) => {
        albumDetailContext.albumDetailDispatch({
            type: "SELECTED_ALBUM",
            value: {
                userId: context.state.id,
                id: item.id,
                title: item.title,
            },
        });

        setSelectAlbum({ ...item });
        console.log("사용자가 선택한", item.id);
        if (item.id !== -1) {
            setNoticeMsg("");
        }
    };

    const albumDetail = () => {
        if (selectAlbum.id === -1) {
            setNoticeMsg("원하는 앨범을 선택해주세요.");
        } else {
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
            {noticeMsg ? (
                <div className="bg-errorSubColor text-errorColor px-5 py-3 rounded-lg mb-10">
                    {noticeMsg}
                </div>
            ) : (
                <></>
            )}
            <div className="flex flex-col gap-5">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    albumList?.map((album: TAlbum, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`text-lg px-4 py-2 cursor-pointer ${
                                    albumDetailContext.albumDetailState.id ===
                                    album.id
                                        ? "bg-slate-300"
                                        : "bg-white"
                                } hover:bg-slate-300 focus:bg-slate-300 rounded-lg`}
                                onClick={() => handleAlbumClick(album)}
                            >
                                {index + 1}. {album.title}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default AlbumPage;
