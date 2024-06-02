"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import Search from "@/components/neroshitron/search";
import Gallery from "@/components/neroshitron/gallery";
import Masonry from "react-masonry-css";
import SearchInput from "@/components/neroshitron/search_input";

function PageComponent() {

    const supabase = createClient();
    const user = supabase.auth.getUser();
    const [tags, setTags] = useState<any[]>([]);
    const [nsfwState, setNsfwState] = useState<boolean>(false);
    const [tagsState, setTagsState] = useState<string[]>([]);
    const [searchState, setSearchState] = useState<string>("");
    const [galleries, setGalleries] = useState([]);
    const [tagSearch, setTagSearch] = useState<string>('');
    const [newTagName, setNewTagName] = useState<string>('');
    const getData = async () => {
        const tagsResponse = await fetch(`/api/galleries/tags`);
        const tagsData = await tagsResponse.json();
        setTags(tagsData);
        const galleriesResponse = await fetch(`/api/galleries?search=` + searchState + '&nsfw=' + nsfwState, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tags: tagsState })
        });
        const galleriesData = await galleriesResponse.json();
        setGalleries(galleriesData);
    }

    const createTag = async () => {
        const tagsResponse = await fetch(`/api/galleries/tags`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tag: newTagName })
        });
        const tagsData = await tagsResponse.json();
        getData();
    }

    const deleteTag = async (tagParam: string) => {
        const tagsResponse = await fetch(`/api/galleries/tags`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tag:tagParam })
        });
        const tagsData = await tagsResponse.json();
        getData();
    }

    useEffect(() => {
        getData();
    }, [tagsState]);

    const data = [
        { id: 1, name: "Item 1", imageCount: 5, tier: "Tier 1" },
        { id: 2, name: "Item 2", imageCount: 10, tier: "Tier 2" },
        { id: 3, name: "Item 3", imageCount: 8, tier: "Tier 1" },
    ];

    return (
        <div className="w-full h-1/2 text-white flex justify-center items-center animate-in">
        <div className="w-full lg:w-1/3 rounded-md bg-primary opacity-90 p-12 m-1 mt-32 shadow-lg backdrop-blur">
            <div className="w-full flex">
                <input type="text" onChange={(e)=>{setNewTagName(e.target.value)}} className="mb-8 mr-2 rounded-md bg-secondary p-2 w-1/2 text-white shadow-lg" placeholder="Tag Name" />
                <button onClick={createTag} className="ml-2 shadow-lg w-1/2 h-10 text-center bg-success hover:bg-success-light text-white font-bold rounded flex items-center justify-center">
                    Create
                </button>
            </div>
            <div className="w-full flex">
                <input type="text" value={tagSearch} onChange={(e)=>{setTagSearch(e.target.value)}} className="mb-8 shadow-lg mr-2 rounded-md bg-secondary p-2 w-full text-white" placeholder="Search all tags by name" />
            </div>
            <div className="w-full h-96 overflow-y-scroll no-scrollbar">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2" style={{ width: '90%' }}></th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {tags.filter((value,index,array)=>{
                        return value.name.toLowerCase().includes(tagSearch.toLowerCase());
                    }).map((item:any) => (
                        <tr key={item.name} className="animate-in">
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">
                                <button onClick={()=>{deleteTag(item.name)}}  className="bg-error shadow-lg hover:bg-error-light text-white font-bold py-2 px-4 rounded float-right">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>  

                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-md bg-primary opacity-90 backdrop-blur-lg p-12 m-1 mt-32 shadow-lg">
            <div className="w-full flex">
                <SearchInput placeholderTags={[
                    { value: "tags", label: "❗️ click here to add tags to search" }
                ]} nsfwButtonEnabled={true} searchChanged={(search) => { setSearchState(search) }} nsfwChanged={(nsfw) => { setNsfwState(nsfw) }} tagsChanged={(tags) => { setTagsState(tags) }} />
            
                <a href="/gallery/admin/create" className="ml-2 shadow-lg max-h-14 text-center bg-success hover:bg-success-light text-white w-1/6 font-bold rounded flex items-center justify-center">
                    Create
                </a>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2" style={{ width: '60%' }}></th>
                        <th className="px-4 py-2" style={{width:"15%"}}></th>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Replace this with your data mapping logic */}
                    {galleries.map((item: { name: string, imageCount: number, tier: string }) => (
                        <tr key={item.name} className="animate-in">
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.imageCount}</td>
                            <td className="px-4 py-2">{item.tier.replace("Tier","")}</td>
                            <td className="px-4 py-2">
                                <button className="bg-secondary shadow-lg hover:bg-secondary-light text-white font-bold py-2 px-4 rounded float-right">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>

                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default PageComponent;