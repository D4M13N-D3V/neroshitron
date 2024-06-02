"use client;"
import React, { useState, useEffect } from 'react';
import SearchInput from '@/components/neroshitron/search_input';
import Galleries from './galleries';

interface SearchProps {
  gallerySelected: (gallery: string) => void;
}

const Search = ({ gallerySelected }: SearchProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [nsfw, setNsfw] = useState<boolean>(false);
  const [gallery, setGallery] = useState<string | null>(null);

  const getData = async () => {
  }

  useEffect(() => {
    getData();
  }, [search]);
  useEffect(() => {
    getData();
  }, [nsfw]);
  useEffect(() => {
    getData();
  }, [tags]);
  useEffect(() => {
    getData();
    if (gallery != null)
      gallerySelected(gallery);
  }, [gallery]);
  //TRY TESTING WITH THIS REMOVED!




  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Galleries gallerySelected={(gallery: string) => { setGallery(gallery) }} key={search + "-" + tags.length + "-" + nsfw} search={search} nsfw={nsfw} tags={tags} />
      <section className="fixed flex items-center w-full p-8 pt-20 opacity-90 animate-in animate-once animate-duration-500">
        <div className="container mx-auto py-8">
          <SearchInput nsfwButtonDisabled={true} searchChanged={(search) => { setSearch(search) }} nsfwChanged={(nsfw) => { setNsfw(nsfw) }} tagsChanged={(tags) => { setTags(tags); }} />
        </div>
      </section>
    </>
  );
};

export default Search;