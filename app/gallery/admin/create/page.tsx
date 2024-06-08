"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Masonry from "react-masonry-css";
import SearchInput from "@/components/neroshitron/search_input";

function PageComponent() {
    const router = useRouter();
    const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
    const [filePreviews, setFilePreviews] = useState<string[]>([]);
    const [name, setName] = useState<string>('');
    const [nsfw, setNsfw] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const [tier, setTier] = useState<string>('Free');
    const [thumbnail, setThumbnail] = useState<string>("");
    const [files, setFiles] = useState<FileList>();

    const [tiers, setTiers] = useState<any[]>([]);
    const supabase = createClient();
    const user = supabase.auth.getUser();
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
    }
    useEffect(() => {
        getData();
    }, [selectedGallery]);

    const closeGallery = () => {
        setSelectedGallery(null);
    }

    const createGallery = async () => {
        const formData = new FormData();
        formData.append('name', name);
        if (files) {
            Array.from(files).forEach((file: File) => {
                formData.append('files', file);
            });
        }
        formData.append('tags', JSON.stringify(tags));
        formData.append('nsfw', nsfw.toString());
        formData.append('thumbnail', thumbnail);
        formData.append('tier', tier);
        const response = await fetch('/api/galleries/admin', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            window.location.href = "/gallery/admin/view?id="+name;
        } else {
            console.log(response)
        }
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
                            setFiles(files);
                            setFilePreviews(previews);
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div className="w-full p-8 text-white flex justify-center items-center animate-in">
            <div className="w-full lg:w-1/2 rounded-md bg-primary opacity-90 backdrop-blur-lg p-12 mt-32 shadow-lg">
                <div className="w-full flex pb-4">
                    <span className="text-2xl">Creating New Gallery</span>
                </div>
                <div className="w-full flex">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-8 mr-2 rounded-md bg-secondary p-2 w-1/2 text-white shadow-lg"
                        placeholder="Gallery Name"
                    />
                    <div className="w-1/4">
                        <button onClick={() => router.push("/gallery/admin")} className="w-full bg-error hover:bg-error-light text-white rounded-md p-2 shadow-lg">
                            Back
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button onClick={()=>{createGallery()}} className="w-full bg-success hover:bg-success-light text-white rounded-md p-2 ml-2 shadow-lg    ">
                            <span></span>Create
                        </button>
                    </div>
                </div>
                <div className="w-full lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="w-1/2 absolute pr-14">  
                            <SearchInput
                                placeholderTags={[
                                    { value: "tags", label: "❗️ click here to add tags" },
                                ]}
                                startingTags={tags}
                                nsfwButtonEnabled={true}
                                searchChanged={(search) => { }}
                                nsfwChanged={(nsfw) => { }}
                                tagsChanged={(tags) => { setTags(tags)  }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pt-0 pt-4">
                        <select value={nsfw ? "NSFW" : "SFW"} className="mb-2 shadow-lg rounded-md bg-secondary p-2 w-full text-white" onChange={e=>{
                            setNsfw(e.target.value === "NSFW");
                        }}>
                            <option value="NSFW" selected={nsfw}>NSFW</option>
                            <option value="SFW" selected={nsfw}>SFW</option>
                        </select>
                        <select onChange={e=>{
                            setTier(e.target.value);
                        }} className="mb-2 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white">
                        <option value="" disabled >Select New Tier</option>
                            {tiers.map((tier, index) => (
                                <option key={index} value={tier.name}>{tier.name}</option>
                            ))}
                        </select>
                        <select  onChange={e=>{setThumbnail(e.target.value)}}  className="mb-2 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white">
                            <option value="" disabled selected>Select Thumbnail</option>
                            {files && Array.from(files).map((file: File, index: number) => (
                                <option key={index} value={file.name}>{file.name}</option>
                            ))}
                        </select>
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-lighter bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                            type="file"
                            id="formFileMultiple"
                            multiple
                            onChange={handleFileChange}
                        />
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