"use client";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Vortex } from "@/components/ui/vortex";
import GalleryThumbnail from "@/components/ui/gallery_thumbnail";


import React, { useState, useEffect } from 'react';
import { User } from "@supabase/supabase-js";
import Gallery from "@/components/ui/gallery";

function PageComponent() {

  const supabase = createClient();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [galleries, setGalleries] = useState<any[]>([]); // replace any with your gallery type
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);


  const selectGallery = (gallery:number) => {
    setSelectedGallery(gallery);
    setIsOpen(true);
  };

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
  }, [selectedGallery,isOpen]);
  return ( ( user ? (
    <div className="w-full h-full flex justify-center">
        <div className="flex-1 w-full h-full flex flex-col gap-20">
          <div className="absolute w-full h-full overflow-hidden z-2 animate-jump-in animate-ease-out">
              <img src="gallery_girl.png" className="float-right object-cover h-screen w-3/6" alt="Background" />
          </div> 
          <div className="absolute items-center w-3/5 h-full ml-10 z-2 overflow-hidden">
            <div className="grid grid-cols-3 gap-x-10 h-full overflow-y-auto no-scrollbar pt-36">
              {galleries.map((gallery, index) => (
                <GalleryThumbnail key={index} id={gallery.id} onSelect={() => selectGallery(gallery.id)}></GalleryThumbnail>
              ))}
            </div>
          </div> 
        </div>
        {(isOpen ? (
          <>


        <div className={`fixed inset-0 transition-opacity${isOpen ? 'animate-in' : 'fade-out'}`} aria-hidden="true">
        <div className="absolute inset-0 bg-neroshi-blue-900 opacity-70" onClick={()=>setIsOpen(false)} >
        </div>
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar pt-20 w-full p-20">
          <Gallery id={selectedGallery as number} closeMenu={() => setIsOpen(false)}></Gallery>
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