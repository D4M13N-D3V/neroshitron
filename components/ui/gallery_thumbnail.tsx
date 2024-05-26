import { useState, useEffect } from 'react';

interface GalleryThumbnailProps {
    id: number;
    onSelect: (id:number) => void;
}

const GalleryThumbnail = ({ id, onSelect }: GalleryThumbnailProps) => {
    const [galleryId, setGalleryId] = useState(id as number);
    const [thumbnailUrl, setThumbnailUrl] = useState('' as string);
    const [isLoading, setIsLoading] = useState(true);
    const toggleModal = () => {
        onSelect(galleryId);
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
                    onClick={toggleModal}
                    style={{ width: '20rem', height: '20rem', objectFit: 'cover' }}
                />}
            </div>
        </div>
    );
}

export default GalleryThumbnail;