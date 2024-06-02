"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import Search from "@/components/neroshitron/search";
import Gallery from "@/components/neroshitron/gallery";
import Link from "next/link";

function PageComponent() {

  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const supabase = createClient();

  const getData = async () => {
  }

  useEffect(() => {
    getData();
  }, [selectedGallery]);

   const closeGallery = () => {
    setSelectedGallery(null);
   }


  return (
    <div className="w-full">
      <div className="fixed w-full h-full overflow-hidden z-0 animate-fade-left animate-fade-left animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards">
        <img
          src="gallery_girl.png"
          className="float-right object-cover h-screen w-full  lg:w-5/6 xl:w-3/6  opacity-50 overflow-hidden"
          alt="Background"
        />
      </div>
      <div className="w-2/3">
        <Search gallerySelected={(gallery:string)=>{setSelectedGallery(gallery)}}/>
      </div>

       {selectedGallery!=null ? (
         <>
           {/*
                 This is the modal for holding the gallery
           */}
           <div
             className={`fixed inset-0 transition-opacity z-30 animate-in`}
             aria-hidden="true"
           >
             <div
               className="absolute inset-0 bg-secondary-dark opacity-70 z-30"
               onClick={() => closeGallery()}
             ></div>
             <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar pt-2 w-full p-20 z-30">
               <Gallery
                 id={selectedGallery as string}
                 columns={3}
                 closeMenu={() => closeGallery()}
               ></Gallery>
             </div>
           </div>
         </>
       ) : null}
    </div>
  );
}

export default PageComponent;