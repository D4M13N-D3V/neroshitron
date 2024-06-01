"use client;"
import React, { useState, useEffect, useRef,forwardRef } from 'react';
import { on } from 'events';
import TagSelector from '../neroshitron/tag_selector';

interface SearchInputProps {
  tagsChanged: (tags: string[]) => void;
  searchChanged: (search: string) => void;
  nsfwChanged: (nsfw: boolean) => void;
}

const SearchInput = ({ tagsChanged, searchChanged, nsfwChanged}: SearchInputProps) => {

  const [search, setSearch] = useState<string>('');
  const [nsfw, setNsfw] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectingTags, setSelectingTags] = useState<boolean>(false);
  const tagSelectorRef = React.useRef(null);


  const updateTags = (newTags: string[]) => {
    setSelectedTags(newTags)
    tagsChanged(newTags);
  }

  const onTagsClosed = (tags:string[]) => {
    setSelectingTags(false);
  }

  const openTags = () => {
    setSelectingTags(true);
    if(selectingTags){
      onTagsClosed(selectedTags);
    }
  }

  const getData = async () => {
    setSelectedTags(selectedTags)
  }

  useEffect(() => {
    getData();
  }, [selectedTags]);

  return (
    <>
      <div className="relative md:w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center">
        <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
          <div className="flex flex-row">
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="rounded-l-md h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600" type="text" placeholder="Looking for a specific collection?" />
            <span className="flex items-center bg-gray-100  rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
              <button onClick={()=>{openTags()}} type="button" className={`bg-neroshi-blue-900 hover:bg-neroshi-blue-800 text-lg text-white font-bold py-3 px-6 rounded ${selectedTags.length === 0 ? 'animate-pulse animate-infinite animate-ease-out' : ''}`}>
                Tags
                <span className="ml-1 bg-neroshi-blue-300 text-white rounded-full px-2 py-1 text-xs absolute bottom-7 right-76 transform translate-x-1/2 -translate-y-1/2">{selectedTags.length}</span>
              </button>
              <button onClick={()=>{ setNsfw(!nsfw) }} type="button" className={` w-full ${nsfw ? "bg-pink-900 hover:bg-pink-800":"bg-green-900 hover:bg-green-800"} text-lg text-white font-bold py-3 px-6 rounded ml-6`}>
                {nsfw ? "NSFW" : "SFW"}
              </button>
            </span>
          </div>
        </div>
      </div>
      {(selectingTags) && <TagSelector tagsChanged={(newTags:string[])=>{ updateTags(newTags) }} selectedTagsInput={selectedTags} ref={tagSelectorRef} />}
    </>
  );
};

export default SearchInput;