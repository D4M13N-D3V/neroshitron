"use client;"
import React, { useState, useEffect } from 'react';
import GalleryThumbnail from './gallery_thumbnail';

interface TagProps {
    nsfw: boolean;
    tags: string[];
    search: string;
    gallerySelected: (gallery: string) => void;
}

const Galleries = ({ nsfw, tags, search, gallerySelected }: TagProps) => {

    const [galleries, setGalleries] = useState([]);
    const [nsfwState, setNsfwState] = useState<boolean>(nsfw);
    const [tagsState, setTagsState] = useState<string[]>(tags);
    const [searchState, setSearchState] = useState<string>(search);

    const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

    const selectGallery = (gallery: string) => {
        setSelectedGallery(gallery);
        gallerySelected(gallery);
    };

    console.log(tags)

    const getData = async () => {
        const galleriesResponse = await fetch(`/api/galleries?search=` + searchState + '&nsfw=' + nsfwState, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tags: tagsState })
        });
        const galleriesData = await galleriesResponse.json();
        setGalleries(galleriesData);
    }

    useEffect(() => {
        getData();
    }, [tagsState]);

    return (
        <div className="absolute inset-0 mx-auto ml-16 md:ml-0 pt-48 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-60 gap-x-4 animate-in overflow-y-scroll no-scrollbar z-0">

            {galleries && galleries.map((gallery: any, index) => (
                <GalleryThumbnail
                    key={gallery.name + " " + nsfw}
                    id={gallery.name}
                    title={gallery.name}
                    tags={gallery.tags}
                    columns={gallery.columns}
                    showNsfw={nsfw}
                    subscription={gallery.tier as string}
                    onSelect={selectGallery}
                    nsfw={gallery.nsfw}
                ></GalleryThumbnail>
            ))}
        </div>
    );
};

export default Galleries; 