"use client;"
import React, { useState, useEffect } from 'react';
import Tag from "@/components/neroshitron/tag_pill";
import SearchInput from '@/components/neroshitron/search_input';

interface SearchProps { }

const Search = ({ }:SearchProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [nsfw, setNsfw] = useState<boolean>(false);
  const [selectingTags, setSelectingTags] = useState<boolean>(false);

  const getData = async () => {
  }

  useEffect(() => {
    getData();
  }, []);
  
    return (
      <>
      <section className="fixed flex items-center w-full p-8 pt-20 opacity-90 animate-in animate-once animate-duration-500">
          <div className="container mx-auto py-8">
            <SearchInput searchChanged={(search)=>{setSearch(search)}} nsfwChanged={(nsfw)=>{setNsfw(nsfw)}} tagsChanged={(tags)=>{setTags(tags);}} />
          </div>
      </section>
      </>
    );
};

export default Search;