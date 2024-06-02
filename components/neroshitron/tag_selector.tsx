"use client;"
import React, { forwardRef, useState, useEffect } from 'react';
import Tag from './tag_pill';

interface TagSelectorProps {
    tagSearch: string,
    selectedTagsInput: string[],
    tagsChanged: (tags: string[]) => void
}

const TagSelector = forwardRef<TagSelectorProps, { tagSearch: string, selectedTagsInput: string[], tagsChanged: (tags: string[]) => void }>((props, ref) => {

    const [tags, setTags] = useState<any[]>([]);
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
        const tagsResponse = await fetch(`/api/galleries/tags`);
        const tagsData = await tagsResponse.json();
        setTags(tagsData);
    }

    useEffect(() => {
        props.tagsChanged(selectedTags);
        getData();
    }, [selectedTags, tagSearch]);

    useEffect(() => {
        props.tagsChanged(selectedTags);
        getData();
    }, [selectedTags, tagSearch]);

    useEffect(() => {
        getData();
    }, []);

    return (

        <div className="flex md:w-full pt-4 justify-center items-center">
            {(tags.length > 0) && (
                <div className="z-10 grid p-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1 w-full max-h-96 overflow-y-scroll no-scrollbar pt-4 bg-neroshi-blue-900 rounded-md opacity-90 backdrop-filter backdrop-blur-md mx-auto">
                    {tags.map((tag: any) => (
                        (tagSearch === '' || tag.name.toLowerCase().includes(tagSearch.toLowerCase())) && // Updated condition
                        <Tag tag={tag.name} selected={selectedTags.includes(tag.name)} onTagClicked={(tag) => handleTag(tag)} />
                    ))}
                </div>
            )}
        </div>
    );
});

export default TagSelector;