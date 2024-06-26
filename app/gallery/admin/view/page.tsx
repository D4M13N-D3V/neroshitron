"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Gallery from "@/components/neroshitron/gallery";
import SearchInput from "@/components/neroshitron/search_input";
import GalleryThumbnail from "@/components/neroshitron/gallery_thumbnail";

function PageComponent() {
    const [filePreviews, setFilePreviews] = useState<string[]>([]);
    const supabase = createClient();
    const user = supabase.auth.getUser();
    const [gallery , setGallery] = useState<any>(null);
    const [originalName, setOriginalGalleryName] = useState<string>('');
    const [galleryName, setGalleryName] = useState<string>('');
    const [nsfw, setNsfw] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const [tier, setTier] = useState<string>('Free');
    const [thumbnail, setThumbnail] = useState<string>();
    const [fileNames, setFileNames] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const router = useRouter();

    const [tiers, setTiers] = useState<any[]>([]);
    const [open, setOpen] = useState<boolean>(false);


    const [images, setImages] = useState<string[]>([]);
    const getData = async () => {
        try {
            const response = await fetch('/api/tiers');
            if (response.ok) {
                const data = await response.json();
                setTiers(data);
            } else {
                console.error('failed to fetch tiers');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const galleryResponse = await fetch(`/api/galleries/admin/${id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const galleryData = await galleryResponse.json();
        setGallery(galleryData.gallery);

        const filesResponse = await fetch(`/api/galleries/${id}/images/names`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const filesData = await filesResponse.json();
        setFileNames(filesData);

        setNsfw(galleryData.gallery.nsfw);
        setTags(galleryData.gallery.tags);
        setTier(galleryData.gallery.tier);
        setGalleryName(galleryData.gallery.name);
        if(originalName === ''){
            setOriginalGalleryName(galleryData.gallery.name);
        }
        const imagesResponse = await fetch('/api/galleries/' + galleryData.gallery.name+ '/images');
        const imagesUrls = await imagesResponse.json() as string[];
        setImages(imagesUrls);
    }
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
    }, [gallery]);

    useEffect(() => {
    }, [gallery, ]);
    useEffect(() => {
    }, [ nsfw ]);
    useEffect(() => {
    }, [tags ]);
    useEffect(() => {
    }, [galleryName]);
    useEffect(() => {
    }, [ tier]);

    const updateGallery = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const formData = new FormData();
        formData.append('id', gallery.name);
        formData.append('name', galleryName);
        formData.append('thumbnail', thumbnail ?? '');
        formData.append('originalName', originalName);
        formData.append('tags', JSON.stringify(selectedTags));
        formData.append('nsfw', nsfw.toString());
        formData.append('tier', tier);
        const response = await fetch(`/api/galleries/admin/${originalName}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            console.log(response)
            const data = await response.json();
        } else {
            console.log(response)
        }
        if(originalName != galleryName){
            router.push(`/gallery/admin/view?id=${galleryName}`)
        }
        else{
            window.location.reload();
        }
    }

    const deleteGallery = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const response = await fetch(`/api/gallery/admin/${gallery.name}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            router.push("/gallery/admin");
        } else {
            console.log(response)
        }
    }

    const tierObj = tiers.find((tier) => tier.name == gallery.tier);
    const subscriptionColor = tier ? tierObj.color : null;
    return (
        <div className="w-full p-8 h-screen text-white flex justify-center items-center animate-in">
            <div className="w-full lg:w-1/2 rounded-md p-12 mt-14 ">
                <div className="w-full lg:pt-0 pt-32 flex pb-60 justify-center"> {/* Center the gallery thumbnail */}
                    {gallery != null && (
                        <GalleryThumbnail
                            key={"galleryThumbnail"+galleryName+"-"+tags.join("")}
                            id={originalName}
                            columns={3}
                            onSelect={function (id: string, columns: number): void { setOpen(true) }}
                            title={galleryName}
                            subscription={tier}
                            tags={tags}
                            subscriptionColor={subscriptionColor}
                            showNsfw={false}
                            nsfw={nsfw}
                        ></GalleryThumbnail>
                    )}
                </div>
                <div className="w-full opacity-90 backdrop-blur-lg bg-primary  shadow-lg p-8 pb-0 rounded">
                    <span className="text-2xl">Editing Gallery</span>
                    <div className="w-full flex justify-end">
                        <div className="w-1/2 flex">
                            <input
                                type="text"
                                className="mb-8 mr-2 rounded-md bg-secondary p-2 w-full text-white"
                                placeholder="Gallery Name"
                                value={galleryName}
                                onChange={(e) => setGalleryName(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2 flex">
                            <button
                                onClick={() => deleteGallery()}
                                className="h-10 text-center w-full bg-error hover:bg-error-light text-white rounded-md p-2 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                                stroke="currentColor" className="md:hidden size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                        
                                <span className="md:block hidden">Delete</span>
                            </button>
                            <button
                                onClick={() => (router.push("/gallery/admin"))}
                                className="h-10 w-full bg-error-dark hover:bg-error text-white rounded-md p-2 ml-2 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                                stroke="currentColor" className="md:hidden size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>
                        
                                <span className="md:block hidden">Back</span>
                            </button>
                            <button onClick={()=>{updateGallery()}} className="h-10 w-full bg-warning hover:bg-warning-light text-white rounded-md p-2 ml-2">
                                <span>Update</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:flex opacity-90 backdrop-blur-lg bg-primary  shadow-lg p-8 pt-0 rounded">
                    <div className="w-full lg:w-1/2 mr-44">
                        <div className="w-1/2 fixed mr-8">

                        {gallery &&(
                        <SearchInput
                        placeholderTags={[
                            { value: "tags", label: "❗️ click here to add tags" },
                        ]}
                            startingTags={gallery.tags}
                            nsfwButtonEnabled={true}
                            searchChanged={(search) => {}}
                            nsfwChanged={(nsfw) => {}}
                            tagsChanged={(tags) => { setSelectedTags(tags) }}
                        />
                        )}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2  pt-4">
                    {gallery != null && (<>
                        <select value={nsfw ? "NSFW" : "SFW"} className="mb-2 shadow-lg rounded-md bg-secondary p-2 w-full text-white" onChange={e=>{
                            setNsfw(e.target.value == "NSFW");
                        }}>
                            <option value="" disabled >Set NSFW</option>
                            <option value="NSFW" selected={nsfw}>NSFW</option>
                            <option value="SFW" selected={!nsfw}>SFW</option>
                        </select>
                        <select onChange={e=>{
                            setTier(e.target.value);
                        
                        }} className="mb-2 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled >Select New Tier</option>
                            {tiers.map((tier, index) => (
                                <option selected={tier.name==gallery.tier} key={index} value={tier.name}>{tier.name}</option>
                            ))}
                        </select>
                        <select onChange={e=>{setThumbnail(e.target.value)}} className="mb-2 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected>Select New Thumbnail</option>
                            {fileNames.map((name, index) => (
                                <option selected={name==gallery.thumbnail_file} key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </>
                    )}
                    </div>
                </div>
            {(open) && (
                <>
                {/*
                    This is the modal for holding the gallery
                */}
                <div
                className={`fixed inset-0 transition-opacity z-30 animate-in`}
                aria-hidden="true"
                >
                <div
                    className="absolute w-full h-full inset-0 bg-secondary-dark opacity-70 z-30"
                    onClick={() => setOpen(true)}
                ></div>
                <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar pt-2 w-full p-20 h-full z-30">
                    <Gallery
                    id={gallery.name}
                    columns={3}
                    closeMenu={() => setOpen(false)}
                    ></Gallery>
                </div>
                </div>
                </>
            )}
            </div>
        </div>
    );
}
export default PageComponent;