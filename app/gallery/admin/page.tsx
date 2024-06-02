"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import Search from "@/components/neroshitron/search";
import Gallery from "@/components/neroshitron/gallery";
import Masonry from "react-masonry-css";

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
        <div className="w-full text-white flex justify-center items-center">
            <div className="w-1/2 rounded-md bg-primary p-12 mt-32">
                <label
                    htmlFor="formFileMultiple"
                    className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
                >
                    Images To Upload For Gallery
                </label>
                <input
                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                    type="file"
                    id="formFileMultiple"
                    multiple
                    onChange={handleFileChange}
                />
                <Masonry
                                breakpointCols={3}
                                className="my-masonry-grid pl-6 ">
                {filePreviews.map((preview, index) => (
                    <img key={index} src={preview} alt={`Preview ${index}`} />
                ))}
                </Masonry>
            </div>
        </div>
    );
}
export default PageComponent;