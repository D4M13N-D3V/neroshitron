import { useState, useEffect } from 'react';

interface GalleryThumbnailProps {
    id: string;
    columns: number;
    onSelect: (id: string, columns: number) => void;
    title: string;
    subscription: string;
    tags: string[];
    showNsfw: boolean;
    nsfw: boolean;
}

const GalleryThumbnail = ({ id, columns, onSelect, title,showNsfw, nsfw, subscription, tags }: GalleryThumbnailProps) => {
    const [galleryId, setGalleryId] = useState<string>(id);
    const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [galleryCollumns, setColumns] = useState<number>(columns);
    const [imageCount, setImageCount] = useState<number>(0);
    const [nsfwState, setNsfw] = useState<boolean>(nsfw);
    const [showNsfwState, setShowNsfw] = useState<boolean>(showNsfw);
    const [subscriptionState, setSubscription] = useState<string>(subscription);
    const [tagsState, setTags] = useState<string[]>(tags);
    const openGallery = () => {
        onSelect(galleryId, galleryCollumns);
    };

    const getData = async () => {
        setIsLoading(true);
        const thumbnailResponse = await fetch('/api/galleries/' + title + '/thumbnail?nsfw=' + showNsfwState);
        const thumbnailUrl = await thumbnailResponse.text();
        const imagesCountResponse = await fetch('/api/galleries/' + title + '/images/count');
        const imageCount = await imagesCountResponse.json() as number;
        setImageCount(imageCount);
        setThumbnailUrl(thumbnailUrl);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, [galleryId]);

    return (
        <div className="py-3 sm:max-w-xl sm:mx-auto flex-3 animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-normal animate-fill-forwards">
            <div className="h-48 overflow-visible w-full relative hover:scale-95 rounded-3xl">
                {!isLoading ? (
                    <>
                        <img
                            className={`aspect-content rounded-3xl`}
                            src={thumbnailUrl}
                            alt=""
                            onClick={openGallery}
                            key={galleryId}
                            style={{ width: '20rem', height: '20rem', objectFit: 'cover' }}
                        />
                        <div className="bottom-0 left-0 w-full h-10% p-2 rounded-md flex flex-col justify-end">
                            <div className="text-white flex justify-between">
                                <div>
                                    <div className="flex">
                                        <h3 className=" pr-4 text-lg font-bold break-words" style={{ lineHeight: '2rem', textShadow: '0 0 2px black' }}>{title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white flex justify-between">
                                <div className="flex items-center">
                                    <span className="bg-neroshi-blue-900   text-white mr-2 px-2 py-1 rounded-md text-sm flex items-center h-full">
                                        <span className="text-center">{imageCount}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </span>
                                    {nsfwState && (
                                        <span className=" bg-red-900 text-white px-2 py-1 mr-2 rounded-md text-sm h-full flex items-center">NSFW</span>
                                    )}
                                    {subscription === "Free" && (
                                        <span className=" bg-gray-900 text-white px-2 py-1 rounded-md text-sm h-full flex items-center">Free</span>
                                    )}
                                    {subscription === "Tier 1" && (
                                        <span className=" bg-purple-600 text-white px-2 py-1 rounded-md text-sm h-full flex items-center">Tier 1</span>
                                    )}
                                    {subscription === "Tier 2" && (
                                        <span className=" bg-pink-700 text-white px-2 py-1 rounded-md text-sm h-full flex items-center">Tier 2</span>
                                    )}
                                    {subscription === "Tier 3" && (
                                        <span className=" bg-fuchsia-500 text-white px-2 py-1 rounded-md text-sm h-full flex items-center">Tier 3</span>
                                    )}
                                </div>
                            </div>
                            <div className="text-white flex justify-between">
                                <div>
                                    <div className="flex">
                                        {tagsState.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`pr-4 text-sm font-bold break-words"
                                                style={{ lineHeight: '2rem', textShadow: '0 0 2px black' }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="animate-pulse bg-neroshi-blue-950 rounded-3xl" style={{ width: '20rem', height: '20rem' }}></div>
                )}
            </div>
        </div>
    );
};

export default GalleryThumbnail;