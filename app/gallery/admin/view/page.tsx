"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import Search from "@/components/neroshitron/search";
import Gallery from "@/components/neroshitron/gallery";
import Masonry from "react-masonry-css";
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

    const getData = async () => {
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
        formData.append('id', gallery.id);
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
            window.location.href=`/gallery/admin/view?id=${galleryName}`
        }
        else{
            window.location.reload();
        }
    }

    const deleteGallery = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const response = await fetch(`/api/gallery/admin/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            window.location.href = "/gallery/admin";
        } else {
            console.log(response)
        }
    }

    return (
        <div  className="w-full text-white flex justify-center items-center animate-in">
            <div className="w-full lg:w-1/2 rounded-md p-12 mt-14 ">
                <div className="w-full flex pb-60">
                    {gallery != null && (
                        <GalleryThumbnail
                            key={"galleryThumbnail"+galleryName+"-"+tags.join("")}
                            id={originalName}
                            columns={3}
                            onSelect={function (id: string, columns: number): void {}}
                            title={galleryName}
                            subscription={tier}
                            tags={tags}
                            showNsfw={false}
                            nsfw={nsfw}
                        ></GalleryThumbnail>
                    )}
                </div>
                <div className="w-full flex opacity-90 backdrop-blur-lg bg-primary  shadow-lg p-8 pb-0 rounded">
                    <input
                        type="text"
                        className="mb-8 mr-2 rounded-md bg-secondary p-2 w-1/2 text-white"
                        placeholder="Gallery Name"
                        value={galleryName}
                        onChange={(e) => setGalleryName(e.target.value)}
                    />
                    <div className="w-1/6">
                        <button
                            onClick={() => deleteGallery()}
                            className="w-full bg-error hover:bg-error-light text-white rounded-md p-2"
                        >
                            Delete
                        </button>
                    </div>
                    <div className="w-1/6">
                        <button
                            onClick={() => (window.location.href = "/gallery/admin")}
                            className="w-full bg-error-dark hover:bg-error text-white rounded-md p-2 ml-2"
                        >
                            Back
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button onClick={()=>{updateGallery()}} className="w-full bg-success hover:bg-success-light text-white rounded-md p-2 ml-4">
                            Save
                        </button>
                    </div>
                </div>
                <div className="w-full flex opacity-90 backdrop-blur-lg bg-primary  shadow-lg p-8 pt-0 rounded">
                    <div className="w-1/2 mr-2">
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
                    <div className="w-1/2">
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
                            <option value="Free"   selected={tier === "Free"}>Free</option>
                            <option value="Tier 1" selected={tier === "Tier 1"}>Tier 1</option>
                            <option value="Tier 2" selected={tier === "Tier 2"}>Tier 2</option>
                            <option value="Tier 3" selected={tier === "Tier 3"}>Tier 3</option>
                        </select>
                        <select onChange={e=>{setThumbnail(e.target.value)}} className="mb-2 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected>Select New Thumbnail</option>
                            {fileNames.map((name, index) => (
                                <option selected={name==gallery.thumbnail_file} key={index} value={name}>{name}</option>
                            ))}
                        </select>
                        <Masonry breakpointCols={3} className="my-masonry-grid pl-6 col-span-2">
                            {filePreviews.map((preview, index) => (
                                <img key={index} src={preview} alt={`Preview ${index}`} />
                            ))}
                        </Masonry>
                    </>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageComponent;