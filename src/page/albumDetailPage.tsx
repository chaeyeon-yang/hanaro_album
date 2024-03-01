import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { TAlbumPhoto } from "../type/album/albumInfo";
import { AlbumDetailContext } from "../context/mycontext";

const AlbumDetailPage = () => {
    const id = useParams().id;
    const navigate = useNavigate();
    const albumDetailContext = useContext(AlbumDetailContext);
    const [albumphotos, setAlbumPhotos] = useState<TAlbumPhoto[]>();
    useEffect(() => {
        const controller = new AbortController();
        const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

        axios
            .get(url, { signal: controller.signal })
            .then((res) => {
                console.log(albumDetailContext);
                setAlbumPhotos(res.data);
            })
            .catch((err) => console.log(err));
        return () => {
            controller.abort();
        };
    }, []);
    return (
        <div className="flex flex-col gap-10 my-10">
            <div className="text-2xl text-center">
                {albumDetailContext.albumDetailState.title}
            </div>
            <div className="grid place-items-center	auto-rows-auto	grid-cols-5	 gap-3 ">
                {albumphotos?.map((photo, index) => {
                    return (
                        <img
                            src={photo.thumbnailUrl}
                            key={index}
                            alt={`thumbnail ${photo.id}`}
                        />
                    );
                })}
            </div>
            <button
                className="bg-btnColor text-white font-bold px-3.5 py-2 w-fit rounded-lg cursor-pointer"
                onClick={() => {
                    navigate("/albums");
                }}
            >
                뒤로가기
            </button>
        </div>
    );
};

export default AlbumDetailPage;
