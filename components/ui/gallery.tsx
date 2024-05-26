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

  const renderButtons = () => {
    return (
        <>  
            <div className="z-10 fixed left-6 bottom-4 w-96 h-32 bg-purple-900 bg-opacity-10  flex justify-center h-16 animate-in rounded-3xl" style={{ backdropFilter: 'blur(10px)' }}>
            </div>
            <button
                className={`fixed left-40 bottom-5 text-center w-56 animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-neroshi-blue-800'}`}
                onClick={() => selectedImage && handleDownload(selectedImage)}
                disabled={!selectedImage}
            >
                Download Current Image
            </button>
            <button
                className={`fixed left-40 bottom-16 w-56 text-center animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50 ${!selectedImage ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-neroshi-blue-800'}`}
                onClick={() => selectedImage && open()}
                disabled={!selectedImage}
            >
                Open Image in New Tab
            </button>
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
      if (images.length === 1) {
            setIsSingle(true);
          setSelectedImage(images[0]);
      }
    }, [selectedImage]);

    const handleClick = (image: string) => {
      setSelectedImage(image);
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
  
    const breakpointColumnsObj = {
      default: 3
    };
    return (
        <>
        <button
            className="fixed bg-purple-800 left-10 bottom-5 animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse mb-4 py-2 px-4 rounded-lg no-underline flex items-center z-50"
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
                        <>
                {selectedImage && 
                    <img
                        src={selectedImage}
                        style={{ objectFit: 'contain' }}
                        className="cursor-pointer animate-in w-full h-auto"
                        onClick={() => setSelectedImage(null)}
                    />
                }
                {renderButtons()}
            </>
             </div>   
            ) : (
                <>
                <div className='w-full h-full flex items-center'>
                <>
            {renderButtons()}
        {selectedImage && 
            <img
                src={selectedImage}
                style={{ objectFit: 'contain' }}
                className="cursor-pointer animate-in w-full h-auto"
                onClick={() => setSelectedImage(null)}
            />
        }
    </>
     </div>   
                <Masonry
                    breakpointCols={selectedImage==null ? 4 : 2}
                    className="my-masonry-grid"
                    style={{ width: selectedImage ? '50%' : '100%' }}
                >
                {images.filter(img => img !== selectedImage).map((image, index) => (
                    <img
                    key={generateRandomString(3)}
                    src={image}
                    onClick={() => handleClick(image)}
                    className={`animate-in animate-once animate-duration-1000 animate-ease-out animate-reverse hover:scale-105 p-2 cursor-pointer my-2 transition-all opacity-100 duration-500 ease-in-out transform`}
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