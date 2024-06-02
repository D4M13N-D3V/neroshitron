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
                <h1>Test</h1>
            </div>
        </div>
    );
}
export default PageComponent;