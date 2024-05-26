"use client";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import GalleryThumbnail from "@/components/ui/gallery_thumbnail";


import React, { useState, useEffect } from 'react';
import { User } from "@supabase/supabase-js";
import Gallery from "@/components/ui/gallery";

function PageComponent() {

  const supabase = createClient();

  const [randomIds, setRandomIds] = useState<string[]>([]); // replace any with your gallery type
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [galleries, setGalleries] = useState<any[]>([]); // replace any with your gallery type
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [galleryColumns, setColumns] = useState<number>(0);
  const generateRandomString = function (length:number) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

  const selectGallery = (gallery:string, columns:number) => {
    setRandomIds([generateRandomString(3), generateRandomString(3), generateRandomString(3), generateRandomString(3)]);
    setSelectedGallery(gallery);
    setColumns(columns);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setColumns(0);
    setIsOpen(false);
  }

  const getData = async () => {
    const galleriesResponse = await fetch('/api/galleries');
    const galleriesData = await galleriesResponse.json();
    let { data: { user } } = await supabase.auth.getUser();
    setGalleries(galleriesData);
    setUser(user);
    setLoading(false);
  }
  useEffect(() => {
    getData();
    
  }, []);
  return ( ( user ? (
    <div className="w-full h-full flex justify-center">
        <div className="flex-1 w-full h-full flex flex-col gap-20">
            <>
            
          <div className="absolute w-full h-full overflow-hidden z-0 animate-flip-up animate-ease-out">
              <img src="gallery_girl.png" className="float-right object-cover h-screen w-3/6" alt="Background" />
          </div> 
          <div  className="absolute items-center w-3/5 h-full ml-10 z-0 overflow-hidden nimate-fade animate-ease-out">
            <div className="grid grid-cols-3 gap-y-36 gap-x-10 h-full overflow-y-auto no-scrollbar pt-36">
              {galleries.map((gallery, index) => (
                
                <GalleryThumbnail key={index} id={gallery.id} columns={gallery.columns} onSelect={selectGallery}></GalleryThumbnail>
              ))}
            </div>
          </div> 
          </>
        </div>
        {(isOpen ? (
          <>


        <div className={`fixed inset-0 transition-opacity z-30 ${isOpen ? 'animate-in' : 'fade-out'}`} aria-hidden="true">
        <div className="absolute inset-0 bg-neroshi-blue-900 opacity-70 z-30" onClick={()=>setIsOpen(false)} >
        </div>
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar pt-2 w-full p-20 z-30">
          <Gallery id={selectedGallery as string} columns={galleryColumns} closeMenu={() => closeGallery()}></Gallery>
        </div>

        </div>
        </>
        ): null)}
    </div>

  ) : (
    <h1>loading</h1>
  )));
}

export default PageComponent;