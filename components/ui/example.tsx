import { use, useState } from 'react';
import { useEffect } from 'react';

interface GalleryThumbnailProps {
}

const GalleryThumbnail = ({ }: GalleryThumbnailProps) => {
    const getData = async () => {
    }
    useEffect(() => {
      getData();
    }, []);

    return (
        <>
        </>
    );
}

export default GalleryThumbnail;