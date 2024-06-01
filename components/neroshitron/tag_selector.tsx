"use client;"
import React, { useImperativeHandle,forwardRef, useState, useEffect } from 'react';
import { createClient } from "@/utils/supabase/client";
import Tag from './tag_pill';
import Masonry from 'react-masonry-css';

interface TagSelectorProps { 
    
 }

const TagSelector = forwardRef<TagSelectorProps, {}>((props, ref) => {

    const [tags, setTags] = useState<any[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const supabase = createClient();

    useImperativeHandle(ref, () => ({
        getSelectedTags: () => {
            return tags.map(tag => tag.name);
        },
      }));
    
    const getData = async () => {
        const tagsResponse = await fetch(`/api/galleries/tags`);
        const tagsData = await tagsResponse.json();
        setTags(tagsData);
    }
    
    const handleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    console.log(selectedTags)
    return (
        <div className="flex md:w-full lg:w-1/2 animate-in mx-auto pt-4">
            <div className="grid grid-cols-6 gap-4 w-full animate-in mx-auto pt-4 bg-neroshi-blue-900 pr-8 pb-4 rounded-md">                
                {tags.map((tag: any) => (
                    <Tag key={tag.id} tag={tag.name} selected={selectedTags.includes(tag.name)} onTagClicked={(tag) => handleTag(tag)} />
                ))}
            </div>
        </div>
    );
});

export default TagSelector;