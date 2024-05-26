import { use, useState } from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';
import Masonry from 'react-masonry-css';

interface GalleryProps {
    id: string;
    closeMenu: () => void;
}

const Gallery = ({ id, closeMenu }: GalleryProps) => {

    const [isSingle, setIsSingle] = useState<boolean>(false);
    const [loaded, setLoaded] = useState({})
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [images, setImages] = useState<string[]>([]);
    const [galleryId, setGalleryId] = useState(id as string);
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    }
    console.log(id)
    const getData = async () => {
      const thumbnailResponse = await fetch('/api/galleries/'+String(galleryId)+'/images');
      const thumbnailUrl = await thumbnailResponse.json() as string[];
      setImages(thumbnailUrl);
    }
    const generateRandomString = function (length:number) {
      let result           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

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

  const renderButtons = () => {
    return (
        <>  
        
    <div className="z-20 fixed left-6 bottom-4 w-100 h-20  bg-purple-900 bg-opacity-40 animate-in rounded-3xl" style={{ backdropFilter: 'blur(10px)' }}>
       <div className='grid grid-cols-4 gap-4 pl-32 pr-4 pt-4 m-1 '>
       
       <button
            className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-pink-700 hover:bg-pink-600'}`}
            onClick={() => previous()}
            disabled={!selectedImage}
        >
            Previous
        </button>
        <button
            className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-pink-700 hover:bg-pink-600'}`}
            onClick={() => next()}
            disabled={!selectedImage}
        >
            Next
        </button>
       <button
            className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-purple-700 hover:bg-purple-600'}`}
            onClick={() => selectedImage && handleDownload(selectedImage)}
            disabled={!selectedImage}
        >
            Download
        </button>
        <button
            className={`justify-center text-center w-full animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-purple-700 hover:bg-purple-600'}`}
            onClick={() => selectedImage && open()}
            disabled={!selectedImage}
        >
            Open
        </button>
        </div>
    </div>
        </>
    );
};
    const handleDownload = (image: string) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.jpg';  // or any other filename
        link.style.display = 'none';
    
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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

    }, [currentIndex]);

    const handleClick = (image: string) => {
      setSelectedImage(image);
      setCurrentIndex(images.indexOf(image));
    };

    const open = () => {
        if(selectedImage === null) return;
        console.log(selectedImage)
        let base64Image = selectedImage.split(';base64,').pop();
        if(!base64Image) return;
        let blob = new Blob([Uint8Array.from(atob(base64Image), c => c.charCodeAt(0))], {type: 'image/jpeg'}); // adjust the type as needed
        let url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    }
  
    const close = () => {
        if(selectedImage != null){
            setSelectedImage(null);
        }
        else{
            closeMenu();
        }
    }

    const breakpointColumnsObj = {
      default: 3
    };
    return (
        <div className="z-20">
            <button
                className="fixed bg-purple-800 hover:bg-purple-700 left-10 bottom-5 animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50"
                onClick={() => close()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>{" "}
                Back
            </button>

            <div
                className="z-30 pb-10"
                style={{
                    display: selectedImage ? "flex" : "block",
                    alignItems: "flex-start",
                }}
            >
                <>
                    {renderButtons()}
                    {selectedImage ? (
                        <img
                            src={images[currentIndex]}
                            style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "calc(100vh - 20px)" }}
                            className="cursor-pointer animate-in w-full h-auto"
                            onClick={() => setSelectedImage(null)}
                        />
                    ) : (
                        <Masonry
                            breakpointCols={selectedImage == null ? 4 : 2}
                            className="my-masonry-grid"
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
                    )}
                </>
            </div>
        </div>
    );
}

export default Gallery;