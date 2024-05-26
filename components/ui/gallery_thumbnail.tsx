import { use, useState } from 'react';
import { useEffect } from 'react';

interface GalleryThumbnailProps {
    id: number;
    onSelect: (id:number) => void;
}

const GalleryThumbnail = ({ id, onSelect }: GalleryThumbnailProps) => {
    const [galleryId, setGalleryId] = useState(id as number);
    const [thumbnailUrl, setThumbnailUrl] = useState('' as string);
    const toggleModal = () => {
        onSelect(galleryId);
    };

  
    const getData = async () => {
      const thumbnailResponse = await fetch('/api/galleries/'+galleryId+'/thumbnail');
      const thumbnailUrl = await thumbnailResponse.text();
      setThumbnailUrl(thumbnailUrl);
    }
    useEffect(() => {
      getData();
    }, []);

    return (
        <div className="py-3 sm:max-w-xl sm:mx-auto animate-in flex-3">
            <div className="h-48 overflow-visible w-full relative hover:scale-105 shadow-lg">
                <img
                    className={`aspect-content rounded-3xl`}
                    src={thumbnailUrl}
                    alt=""
                    onClick={toggleModal}
                    style={{ width: '20rem', height: '20rem', objectFit: 'cover' }}
                />
            </div>
        </div>
    );
}

export default GalleryThumbnail;