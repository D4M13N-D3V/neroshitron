import { useState, useEffect } from 'react';

interface GalleryThumbnailProps {
    id: string;
    columns: number;
    onSelect: (id:string, columns:number) => void;
}

const GalleryThumbnail = ({ id, columns, onSelect }: GalleryThumbnailProps) => {
    const [galleryId, setGalleryId] = useState<string>(id);
    const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [galleryCollumns, setColumns] = useState<number>(columns);
    const openGallery = () => {
        onSelect(galleryId, galleryCollumns);
    };

    const getData = async () => {
      setIsLoading(true);
      const thumbnailResponse = await fetch('/api/galleries/'+galleryId+'/thumbnail');
      const thumbnailUrl = await thumbnailResponse.text();
      setThumbnailUrl(thumbnailUrl);
      setIsLoading(false);
    }

    useEffect(() => {
      getData();
    }, []);

    return (
        <div className="py-3 sm:max-w-xl sm:mx-auto flex-3">
            <div className="h-48 overflow-visible w-full relative hover:scale-105 shadow-lg bg-gray-400 rounded-3xl">
                {!isLoading && <img
                    className={`aspect-content rounded-3xl`}
                    src={thumbnailUrl}
                    alt=""
                    onClick={openGallery}
                    style={{ width: '20rem', height: '20rem', objectFit: 'cover' }}
                />}
            </div>
        </div>
    );
}

export default GalleryThumbnail;