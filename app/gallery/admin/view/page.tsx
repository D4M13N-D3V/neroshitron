"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import Search from "@/components/neroshitron/search";
import Gallery from "@/components/neroshitron/gallery";
import Masonry from "react-masonry-css";
import SearchInput from "@/components/neroshitron/search_input";

function PageComponent() {

    const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
    const [filePreviews, setFilePreviews] = useState<string[]>([]);
    const supabase = createClient();
    const user = supabase.auth.getUser();
    const getData = async () => {
    }
    useEffect(() => {
        getData();
    }, [selectedGallery]);

    const closeGallery = () => {
        setSelectedGallery(null);
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const previews: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target && e.target.result) {
                        previews.push(e.target.result.toString());
                        if (previews.length === files.length) {
                            setFilePreviews(previews);
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div className="w-full text-white flex justify-center items-center animate-in">
            <div className="w-1/2 rounded-md bg-primary p-12 mt-32">
                <div className="w-full flex">
                    <input
                        type="text"
                        className="mb-8 mr-2 rounded-md bg-secondary p-2 w-1/2 text-white"
                        placeholder="Gallery Name"
                    />
                    <div className="w-1/4">
                        <button  onClick={() => window.location.href = "/gallery/admin"}  className="w-full bg-error hover:bg-error-light text-white rounded-md p-2">
                            Back
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button className="w-full bg-success hover:bg-success-light text-white rounded-md p-2 ml-2">
                            Save     Gallery
                        </button>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="w-1/2 mr-2">
                        <SearchInput
                            placeholderTags={[
                                { value: "tags", label: "❗️ click here to add tags" },
                            ]}
                            nsfwButtonEnabled={false}
                            searchChanged={(search) => {}}
                            nsfwChanged={(nsfw) => {}}
                            tagsChanged={(tags) => {}}
                        />
                    </div>
                    <div className="w-1/2">
                        <select className="mb-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected>Select NSFW Setting</option>
                            {filePreviews.map((preview, index) => (
                                <option key={index} value={preview}>{`Thumbnail ${index}`}</option>
                            ))}
                        </select>
                        <select className="mb-2 mr-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected>Select New Tier</option>
                            {filePreviews.map((preview, index) => (
                                <option key={index} value={preview}>{`Thumbnail ${index}`}</option>
                            ))}
                        </select>
                        <select className="mb-2 mr-2 rounded-md bg-secondary p-2 w-full text-white">
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