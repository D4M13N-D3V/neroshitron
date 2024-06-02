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
    const [galleries, setGalleries] = useState([]);
    const [nsfwState, setNsfwState] = useState<boolean>(false);
    const [tagsState, setTagsState] = useState<string[]>([]);
    const [searchState, setSearchState] = useState<string>("");

    const getData = async () => {
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

    useEffect(() => {
        getData();
    }, [tagsState]);

    const data = [
        { id: 1, name: "Item 1", imageCount: 5, tier: "Tier 1" },
        { id: 2, name: "Item 2", imageCount: 10, tier: "Tier 2" },
        { id: 3, name: "Item 3", imageCount: 8, tier: "Tier 1" },
    ];
    

    return (
        <div className="w-full text-white flex justify-center items-center animate-in">
            <div className="w-1/2 rounded-md bg-primary p-12 mt-32">
                <div className="w-full flex">
                    <SearchInput placeholderTags={[
                        { value: "tags", label: "❗️ click here to add tags to search" }
                    ]} nsfwButtonEnabled={true} searchChanged={(search) => { setSearchState(search) }} nsfwChanged={(nsfw) => { setNsfwState(nsfw) }} tagsChanged={(tags) => { setTagsState(tags) }} />
                    <a href="/gallery/admin/create" className="ml-2 text-center bg-success hover:bg-success-light text-white w-1/6 font-bold rounded flex items-center justify-center">
                        Create
                    </a>
                </div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2" style={{ width: '60%' }}>Name</th>
                            <th className="px-4 py-2" style={{width:"15%"}}>📸 #</th>
                            <th className="px-4 py-2">Tier</th>
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
                                    <a href="/gallery/admin/view" className="bg-secondary hover:bg-secondary-light text-white font-bold py-2 px-4 rounded float-right">
                                        View
                                    </a>
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