"use client;"
import React, { useImperativeHandle,forwardRef, useState, useEffect } from 'react';
import { createClient } from "@/utils/supabase/client";
import Tag from './tag_pill';
import Masonry from 'react-masonry-css';

interface TagSelectorProps { 
    selectedTagsInput: string[],
    tagsChanged: (tags: string[]) => void
 }

const TagSelector = forwardRef<TagSelectorProps, { selectedTagsInput: string[], tagsChanged: (tags: string[]) => void }>((props, ref) => {

    const [tags, setTags] = useState<any[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>(props.selectedTagsInput);


    const handleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
        setTags(selectedTags);
    };

    const getData = async () => {
        const tagsResponse = await fetch(`/api/galleries/tags`);
        const tagsData = await tagsResponse.json();
        setTags(tagsData);
    }

    const generateRandomString = (length: number): string => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    };

    useEffect(() => {
        props.tagsChanged(selectedTags);
        getData();
    }, [selectedTags]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex md:w-full lg:w-1/2 animate-in mx-auto pt-4">
            <div className="grid grid-cols-6 gap-4 w-full mx-auto pt-4 bg-neroshi-blue-900 pr-8 pb-4 rounded-md opacity-75 backdrop-filter backdrop-blur-md">
                {tags.map((tag: any) => (
                    <Tag key={tag.name} tag={tag.name} selected={selectedTags.includes(tag.name)} onTagClicked={(tag) => handleTag(tag)} />
                ))}
            </div>
        </div>
    );
});

export default TagSelector;