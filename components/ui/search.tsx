"use client;"
import React, { useState, useEffect } from 'react';
import TagSelector from './tag_selector';

interface SearchProps { }

const Search = ({ }:SearchProps) => {
  const [nsfw, setNsfw] = useState<boolean>(false);
  const [tags, setTags] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedTags, setSelectedTagsState] = useState<string[]>([]);
  const [selectingTags, setSelectingTags] = useState<boolean>(false);

  const getNsfw = () => {
    return nsfw;
  };

  const getTags = () => {
    return tags;
  };

  const getSearch = () => {
    return search;
  };

  const getSelectedTags = () => {
    return selectedTags;
  };

  const getData = async () => {
    const tagsResponse = await fetch(`/api/galleries/tags`);
    const tagsData = await tagsResponse.json();
    setTags(tagsData);
  }

  useEffect(() => {
    getData();
  }, [selectingTags]);
  
    return (
      <>
      <section className="flex items-center w-full p-8 pt-20 opacity-90 animate-jump-in animate-once animate-duration-500">
        {(tags.length > 0) ? (
          <div className="container mx-auto py-8">
            <div className="relative w-full mx-auto">
              <input
                className="animate-in animate-delay-[2000ms] w-full text-neroshi-blue-950 h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
                type="search"
                placeholder="Search by title..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute right-0 top-0 h-full mr-2 flex items-center">
                <label htmlFor="toggleNSFW" className="text-neroshi-blue-950 animate-in animate-delay-[2000ms] animate-ease-out">
                  Censor NSFW
                  <input
                    id="toggleNSFW"
                    type="checkbox"
                    onChange={(e) => setNsfw(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-neroshi-blue-950 ml-2"
                  />
                </label>
              </div>
            </div>
            <nav className="pt-6 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 justify-items-center">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  className={`w-full rounded-lg no-underline text-white py-3 px-4 font-medium text-center animate-jump-in animate-once animate-duration-500 animate-ease-out ${selectedTags.includes(tag.name) ? 'bg-neroshi-blue-950 hover:bg-neroshi-blue-900' : 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700'
                    }`}
                  href="#"
                >
                  {tag.name}
                </a>
              ))}
              <a
                key={"select-tags"}
                className={`w-full rounded-lg no-underline text-white py-3 px-4 font-medium text-center animate-jump-in animate-once animate-duration-500 animate-ease-out bg-pink-800 hover:bg-pink-700`}
                href="#"
                onClick={() => setSelectingTags(true)}
              >
                Select Tags :  {selectingTags}
              </a>
            </nav>
          </div>
        ) : (
          <div className="animate-pulse bg-neroshi-blue-950 rounded-3xl w-full p-8 mt-10 h-48"></div>
        )}
        {(selectingTags) ??(
          <TagSelector/>
        )}
      </section>
      </>
    );
};

export default Search;