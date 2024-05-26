import { use, useState } from 'react';
import { useEffect } from 'react';
import Masonry from 'react-masonry-css';

interface GalleryProps {
    id: number;
    closeMenu: () => void;
}

const Gallery = ({ id, closeMenu }: GalleryProps) => {

    const [isSingle, setIsSingle] = useState<boolean>(false);
    const [loaded, setLoaded] = useState({})
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [images, setImages] = useState<string[]>([]);
    const [galleryId, setGalleryId] = useState(id as number);
    console.log(id)
    const getData = async () => {
      const thumbnailResponse = await fetch('/api/galleries/'+String(galleryId)+'/images');
      const thumbnailUrl = await thumbnailResponse.json() as string[];
      setImages(thumbnailUrl);
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
    useEffect(() => {
      getData();
      if (images.length === 1) {
        setIsSingle(true);
          setSelectedImage(images[0]);
      }
    }, [selectedImage]);

    const handleClick = (image: string) => {
      setSelectedImage(image);
    };
  
    const breakpointColumnsObj = {
      default: 3
    };
    return (
        <>
        <button
            className="fixed bg-purple-800 left-10 bottom-5 animate-shake mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50"
            onClick={()=> closeMenu()}
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


        <div className='z-10 pt-10'  style={{ display: selectedImage ? 'flex' : 'block', alignItems: 'flex-start'  }}>
            {isSingle  ? (
             <div className='w-full h-full flex items-center'>
             {selectedImage && 
                 <img
                     src={selectedImage}
                     style={{ objectFit: 'contain' }}
                     className="cursor-pointer animate-in w-full h-auto"
                     onClick={() => setSelectedImage(null)}
                 />
             }
             </div>   
            ) : (
                <>
                {selectedImage && 
                <>

                    <img
                        src={selectedImage}
                        style={{ objectFit: 'contain' }}
                        className="cursor-pointer animate-in w-4/6 pr-20 h-auto"
                        onClick={() => setSelectedImage(null)}
                    />
                    <button
                        className="fixed bg-neroshi-blue-800 left-40 bottom-5 animate-pulse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50"
                        onClick={() => handleDownload(selectedImage)}
                    >
                        <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
</svg>
                    Download Current Image
                    </button>
                    </>
                }
                <Masonry
                    breakpointCols={selectedImage==null ? 4 : 2}
                    className="my-masonry-grid"
                    style={{ width: selectedImage ? '50%' : '100%' }}
                >
                {images.filter(img => img !== selectedImage).map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    onClick={() => handleClick(image)}
                    className={`animate-in hover:scale-105 p-2 cursor-pointer my-2 transition-all opacity-100 duration-500 ease-in-out transform`}
                    />
                ))}
                </Masonry>
                </>
            )}
        </div>
        </>
    );
}

export default Gallery;