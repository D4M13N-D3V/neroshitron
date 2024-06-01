"use client;"
import React, { forwardRef, useState, useEffect } from 'react';
import Tag from './tag_pill';

interface TagSelectorProps { 
    tagsInput: any[],
    tagSearch: string,
    selectedTagsInput: string[],
    tagsChanged: (tags: string[]) => void
 }

const TagSelector = forwardRef<TagSelectorProps, {tagsInput:any[], tagSearch: string, selectedTagsInput: string[], tagsChanged: (tags: string[]) => void }>((props, ref) => {

    const [tags, setTags] = useState<any[]>(props.tagsInput);
    const [tagSearch, setTagSearch] = useState<string>(props.tagSearch);
    const [selectedTags, setSelectedTags] = useState<string[]>(props.selectedTagsInput);

    console.log()

    const handleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
        setTags(selectedTags);
    };


    const getData = async () => {
    }

    useEffect(() => {
        props.tagsChanged(selectedTags);
        getData();
    }, [selectedTags,tagSearch,tags]);
    
    const generateRandomString = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };
        return (
            (tags.length > 0)? (
                <div className="animate-in flex md:w-full animate-in pt-4 justify-center items-center">
                    <div className="z-10 grid p-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1 w-full max-h-96 overflow-y-scroll pt-4 bg-neroshi-blue-900 rounded-md opacity-90 backdrop-filter backdrop-blur-md mx-auto">
                    {props.tagsInput.map((tag: any) => (
                            (tagSearch === '' || tag.name.toLowerCase().includes(tagSearch.toLowerCase())) && // Updated condition
                            <Tag key={generateRandomString()} tag={tag.name} selected={selectedTags.includes(tag.name)} onTagClicked={(tag) => handleTag(tag)} />
                        ))}{props.tagsInput.map((tag: any) => (
                            (tagSearch === '' || tag.name.toLowerCase().includes(tagSearch.toLowerCase())) && // Updated condition
                            <Tag key={generateRandomString()} tag={tag.name} selected={selectedTags.includes(tag.name)} onTagClicked={(tag) => handleTag(tag)} />
                        ))}{props.tagsInput.map((tag: any) => (
                            (tagSearch === '' || tag.name.toLowerCase().includes(tagSearch.toLowerCase())) && // Updated condition
                            <Tag key={generateRandomString()} tag={tag.name} selected={selectedTags.includes(tag.name)} onTagClicked={(tag) => handleTag(tag)} />
                        ))}
                    </div>
                </div>
            ):(<></>)
        );
});

export default TagSelector;