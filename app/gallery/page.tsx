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
  const [tags, setTags] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [galleryColumns, setColumns] = useState<number>(0);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
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
    let { data: { user } } = await supabase.auth.getUser();
    const galleriesResponse = await fetch(`/api/galleries?search=`+search, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tags:selectedTags })
    });
    //console.log(galleriesResponse)
    const galleriesData = await galleriesResponse.json();
    const tagsResponse = await fetch(`/api/galleries/tags`);
    const tagsData = await tagsResponse.json();
    setGalleries(galleriesData);
    setTags(tagsData);
    setUser(user);
    setLoading(false);
  }
  useEffect(() => {
    getData();
    
  }, [selectedTags,search]);

  const handleTagClick = (tag: number) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    //console.log(selectedTags)
  };

  return (
    <div>
      <div className="fixed w-full h-full overflow-hidden z-0 animate-fade-left animate-fade-left animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards">
        <img
          src="gallery_girl.png"
          className="float-right object-cover h-screen w-6/6  md:w-5/6 lg:w-3/6  opacity-50 overflow-hidden"
          alt="Background"
        />
      </div>
      <section className="flex items-center w-full p-8 pt-20 opacity-90 animate-in">
      {(tags.length>0) ? (
        <div className="container mx-auto py-8">

          <input
            className=" w-full md:w-1/2 text-neroshi-blue-950 h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg mx-auto"
            type="search"
            placeholder="Search by title..."
            onChange={(e) => setSearch(e.target.value)}
            style={{
              animation: 'expandFromLeft 2s ease-out forwards'
            }}
          />
          {(tags.length>0) ? (
          <nav className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 justify-items-center">
            {tags.map((tag, index) => (
              <a
                key={index}
                className={`w-full rounded-lg no-underline text-white py-3 px-4 font-medium text-center ${
                  selectedTags.includes(tag.name) ? 'bg-neroshi-blue-950 hover:bg-neroshi-blue-900' : 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700'
                }`}
                href="#"
                onClick={() => handleTagClick(tag.name)}
              >
                {tag.name}
              </a>
            ))}
          </nav>
          ):(
            <div className="flex justify-center">
              <p className="text-white">Loading Tags...</p>
            </div>
          )}
        </div>
      ):(
        <div className="animate-pulse bg-neroshi-blue-950 rounded-3xl w-full p-8 mt-10 h-48" ></div>
      )}
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-60 gap-x-5 h-full mb-96 animate-in">
        {galleries && galleries.map((gallery, index) => (
          <div className="mx-auto">
              <GalleryThumbnail
                key={gallery.name}
                id={gallery.name}
                title={gallery.name}
                tags={gallery.tags}
                columns={gallery.columns}
                subscription={gallery.tier as string}
                onSelect={selectGallery}
                nsfw={gallery.nsfw}
              ></GalleryThumbnail>
            </div>
          ))}
      </div>
      {isOpen ? (
        <>
          <div
            className={`fixed inset-0 transition-opacity z-30 ${
              isOpen ? 'animate-in' : 'fade-out'
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