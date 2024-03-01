import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlbumContext } from "../context/mycontext";
import axios from "axios";
import { TAlbumPhoto } from "../type/album/albumInfo";

const AlbumDetailPage = () => {
    const id = useParams().id;
    const navigate = useNavigate();
    const albumContext = useContext(AlbumContext);
    const [albumphotos, setAlbumPhotos] = useState<TAlbumPhoto[]>();
    useEffect(() => {
        console.log(id);
        const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setAlbumPhotos(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="flex flex-col gap-10 my-10">
            <div className="text-2xl text-center">
                {albumContext.albumState.title}
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