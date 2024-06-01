"use client";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import GalleryThumbnail from "@/components/ui/gallery_thumbnail";


import React, { useState, useEffect } from 'react';
import { User } from "@supabase/supabase-js";
import Gallery from "@/components/ui/gallery";
import Search from "@/components/ui/search";

function PageComponent() {

  const supabase = createClient();

  const [showNSFW, setShowNSFW] = useState<boolean>(true);
  const [randomIds, setRandomIds] = useState<string[]>([]); // replace any with your gallery type
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [galleries, setGalleries] = useState<any[]>([]); // replace any with your gallery type
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [galleryColumns, setColumns] = useState<number>(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const generateRandomString = function (length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const selectGallery = (gallery: string, columns: number) => {
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
    let { data: { user } } = await supabase.auth.getUser();
    const galleriesResponse = await fetch(`/api/galleries?search=` + search + '&nsfw=' + showNSFW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tags: selectedTags })
    });
    const galleriesData = await galleriesResponse.json();
    setGalleries(galleriesData);
    setUser(user);
    setLoading(false);
  }
  
  useEffect(() => {
    getData();
  }, [selectedTags, search, showNSFW]);


  return (
    <div>
      <div className="fixed w-full h-full overflow-hidden z-0 animate-fade-left animate-fade-left animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards">
        <img
          src="gallery_girl.png"
          className="float-right object-cover h-screen w-full  lg:w-5/6 xl:w-3/6  opacity-50 overflow-hidden"
          alt="Background"
        />
      </div>

      <Search
      />


      {/*
            These are the thumbnails for the gallery below the search bar
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-60 gap-x-5 h-full mb-96 animate-in">
        {galleries && galleries.map((gallery, index) => (
          <div className="mx-auto">
            <GalleryThumbnail
              key={gallery.name + " " + showNSFW}
              id={gallery.name}
              title={gallery.name}
              tags={gallery.tags}
              columns={gallery.columns}
              showNsfw={showNSFW}
              subscription={gallery.tier as string}
              onSelect={selectGallery}
              nsfw={gallery.nsfw}
            ></GalleryThumbnail>
          </div>
        ))}
      </div>
      {isOpen ? (
        <>
          {/*
                This is the modal for holding the gallery
          */}
          <div
            className={`fixed inset-0 transition-opacity z-30 ${isOpen ? 'animate-in' : 'fade-out'
              }`}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 bg-neroshi-blue-900 opacity-70 z-30"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar pt-2 w-full p-20 z-30">
              <Gallery
                id={selectedGallery as string}
                columns={galleryColumns}
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