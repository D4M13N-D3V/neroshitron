import { use, useState, useRef } from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';
import Masonry from 'react-masonry-css';
import PanZoom, { PanZoomRef } from 'react-easy-panzoom';

interface GalleryProps {
    id: string;
    columns: number;
    closeMenu: () => void;
}

const Gallery = ({ id, columns, closeMenu }: GalleryProps) => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [images, setImages] = useState<string[]>([]);
    const [galleryId, setGalleryId] = useState(id as string);
    const [currentIndex, setCurrentIndex] = useState(0);
    const panZoomRef = useRef<any>(null);

    const next = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }

    const previous = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 1);
        }
    }

    const handleDownload = (image: string) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.jpg';  // or any other filename
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getData = async () => {
        const thumbnailResponse = await fetch('/api/galleries/' + String(galleryId) + '/images');
        const thumbnailUrl = await thumbnailResponse.json() as string[];
        setImages(thumbnailUrl);
    }

    useEffect(() => {
        getData();
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    previous();
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    next();
                    break;
                case 'Escape':
                    close();
                    break;
                default:
                    break;
            }
        };

        setSelectedImage(images[currentIndex]);
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, [selectedImage, currentIndex]);

    const handleClick = (image: string) => {
        setSelectedImage(image);
        setCurrentIndex(images.indexOf(image));
    };

    const resetPanZoom = (event: any) => {
        if (panZoomRef.current && event.target.id != "image-container") {
            panZoomRef.current.autoCenter();
        }
    };

    const close = () => {
        if (selectedImage != null) {
            setSelectedImage(null);
            setImages([]);
        }
        else {
            closeMenu();
        }
    };

    const renderButtons = () => {
        return (
            <div className="z-20 bottom-10 fixed pt-4 bg-purple-900 bg-opacity-40 animate-in rounded-2xl" style={{ backdropFilter: 'blur(10px)' }}>
                <div className='grid grid-cols-4 pl-4 gap-4 pr-4'>
                    <button
                        className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 bg-neroshi-blue-900 hover:bg-neroshi-blue-800`}
                        onClick={() => close()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button
                        className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-pink-700 hover:bg-pink-600'}`}
                        onClick={() => previous()}
                        disabled={!selectedImage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                        </svg>

                    </button>
                    <button
                        className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-pink-700 hover:bg-pink-600'}`}
                        onClick={() => next()}
                        disabled={!selectedImage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    <button
                        className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-purple-700 hover:bg-purple-600'}`}
                        onClick={() => selectedImage && handleDownload(selectedImage)}
                        disabled={!selectedImage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div >
            <div className="z-20"
                onClick={resetPanZoom} style={{ width: selectedImage ? "100%" : "auto", height: selectedImage ? "100%" : "auto" }}>
                <div className='flex justify-center items-center pt-2 pb-20'>
                    {renderButtons()}
                </div>
                {selectedImage ? (
                    <>
                        <PanZoom
                            key={selectedImage}
                            autoCenter={true}
                            ref={panZoomRef}
                        >
                            <div id="image-container" >
                                <img
                                    src={images[currentIndex]}
                                    style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "calc(100vh - 20px)", pointerEvents: "none" }}
                                    className="cursor-pointer animate-in w-full h-auto"
                                >
                                </img>
                            </div>
                        </PanZoom>
                    </>
                ) : (
                    <div
                        className="z-30"
                        style={{
                            display: selectedImage ? "flex" : "block",
                            alignItems: "flex-start",
                        }}
                    >            <div className='flex justify-center items-center pt-2 '>

                            <Masonry
                                breakpointCols={columns}
                                className="my-masonry-grid pl-6 "
                                style={{ width: selectedImage ? "50%" : "100%" }}
                            >
                                {images
                                    .filter((img) => img !== selectedImage)
                                    .map((image, index) => (
                                        <img
                                            src={image}
                                            onClick={() => handleClick(image)}
                                            className={`animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse hover:scale-105 p-2 cursor-pointer my-2 transition-all opacity-100 duration-500 ease-in-out transform`}
                                        />
                                    ))}
                            </Masonry>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Gallery;