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
    const [galleryName, setGalleryName] = useState<string>(''); 

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
        setGalleryName(galleryData.gallery.name);
    }
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
    }, [gallery]);

    return (
        <div className="w-full text-white flex justify-center items-center animate-in">
            <div className="w-full lg:w-1/2 rounded-md opacity-90 backdrop-blur-lg bg-primary p-12 mt-32 shadow-lg">
                <div className="w-full flex pb-72">
                    {gallery != null && (
                        <GalleryThumbnail
                            key={"galleryThumbnail"}
                            id={gallery}
                            columns={3}
                            onSelect={function (id: string, columns: number): void {}}
                            title={gallery.name}
                            subscription={gallery.tier}
                            tags={gallery.tags}
                            showNsfw={true}
                            nsfw={gallery.nsfw}
                        ></GalleryThumbnail>
                    )}
                </div>
                <div className="w-full flex">
                    <input
                        type="text"
                        className="mb-8 mr-2 rounded-md bg-secondary p-2 w-1/2 text-white"
                        placeholder="Gallery Name"
                        value={galleryName}
                        onChange={(e) => setGalleryName(e.target.value)}
                    />
                    <div className="w-1/6">
                        <button
                            onClick={() => (window.location.href = "/gallery/admin")}
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
                        <button className="w-full bg-success hover:bg-success-light text-white rounded-md p-2 ml-4">
                            Save
                        </button>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="w-1/2 mr-2">
                        <SearchInput
                            placeholderTags={[
                                { value: "tags", label: "❗️ click here to add tags" },
                            ]}
                            nsfwButtonEnabled={true}
                            searchChanged={(search) => {}}
                            nsfwChanged={(nsfw) => {}}
                            tagsChanged={(tags) => {}}
                        />
                    </div>
                    <div className="w-1/2">
                        <select className="mb-2 shadow-lg rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected></option>
                            {filePreviews.map((preview, index) => (
                                <option key={index} value={preview}>{`Thumbnail ${index}`}</option>
                            ))}
                        </select>
                        <select className="mb-2 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected>Select New Tier</option>
                            {filePreviews.map((preview, index) => (
                                <option key={index} value={preview}>{`Thumbnail ${index}`}</option>
                            ))}
                        </select>
                        <select className="mb-2 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected>Select New Thumbnail</option>
                            {filePreviews.map((preview, index) => (
                                <option key={index} value={preview}>{`Thumbnail ${index}`}</option>
                            ))}
                        </select>
                        <Masonry breakpointCols={3} className="my-masonry-grid pl-6 col-span-2">
                            {filePreviews.map((preview, index) => (
                                <img key={index} src={preview} alt={`Preview ${index}`} />
                            ))}
                        </Masonry>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageComponent;