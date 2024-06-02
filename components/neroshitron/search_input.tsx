"use client;"
import React, { useState, useEffect, useRef,forwardRef } from 'react';
import TagSelector from '../neroshitron/tag_selector';
import Select from "react-tailwindcss-select";
import { SelectValue } from 'react-tailwindcss-select/dist/components/type';
import { Option } from 'react-tailwindcss-select/dist/components/type';

interface SearchInputProps {
  tagsChanged: (tags: string[]) => void;
  searchChanged: (search: string) => void;
  nsfwChanged: (nsfw: boolean) => void;
}

const SearchInput = ({ tagsChanged, searchChanged, nsfwChanged}: SearchInputProps) => {

  const [tagSearch, setTagSearch] = useState<string>('');
  const [nsfw, setNsfw] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTagsInput, setSelectedTagsInput] = useState<Option[]>([]);
  const [selectingTags, setSelectingTags] = useState<boolean>(false);
  const tagSelectorRef = React.useRef(null);
  const [tags, setTags] = useState<any[]>([]);

  const getData = async () => {
    const tagsResponse = await fetch(`/api/galleries/tags`);
    const tagsData = await tagsResponse.json();
    setTags(tagsData);
  }




  const updateTags = (newTags: string[]) => {
    setSelectedTags(newTags)
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

  useEffect(() => {
    tagsChanged(selectedTags);
  }, [selectedTags]);
  useEffect(() => {
    nsfwChanged(nsfw);
  }, [nsfw]);
  useEffect(() => {
    getData();
  }, []);

  const tagOptions = tags.map((tag: { name: string; }) => ({ value: tag.name, label: tag.name }));
  console.log(tagOptions)
  return (
    <>
      <div className="relative md:w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center z-10">
        <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
          <div className="flex flex-row">
            
            {(selectingTags) ? (
              <>
              <input autoFocus value={tagSearch} onChange={(e) => setTagSearch(e.target.value)} className="rounded-l-md h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600" type="text" placeholder="Looking for specific tag?" />
              
              <span className="flex items-center bg-gray-100  rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
                <button key="back" onClick={()=>{openTags()}} type="button" className={`animate-in bg-pink-900 hover:bg-pink-800 text-lg text-white font-bold py-3 px-6 rounded`}>
                  Back
                </button>
                
              </span>
              </>
            )
            :(       
              <>
              <Select isMultiple isSearchable isClearable options={tagOptions} placeholder="Start typing to search tags..." 
              
              onChange={(value: SelectValue | SelectValue[] | null) => {
                if (value === null) {
                      setSelectedTags([]);
                      setSelectedTagsInput([]);
                }
                    if (Array.isArray(value)) {
                      setSelectedTags(value.map((option: { value: string; }) => option.value));
                      setSelectedTagsInput(value as Option[])
                    } else if (value) {
                      setSelectedTags([value.value]);
                      setSelectedTagsInput([value])
                    }
                  } }
              
              value={selectedTagsInput} primaryColor={'neroshi-blue'}/>
              <span className="flex items-center rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
              {/* <div className="relative">
                <button key="tags" data-tip={selectedTags.join(',')} onClick={()=>{openTags()}} type="button" className={`bg-neroshi-blue-900 hover:bg-neroshi-blue-800 text-lg text-white font-bold py-3 px-6 rounded ${selectedTags.length == 0 ? 'animate-pulse animate-infinite animate-ease-out' : 'animate-in'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                  </svg>
                </button>
                <span className="absolute top-8 left-14 inline-block w-6 h-6 </svg>text-xs bg-pink-800 text-white rounded-full flex items-center justify-center">
                  {selectedTags.length}
                </span>
              </div> */}
  
  
                <button 
                onClick={()=>{ setNsfw(!nsfw) }} 
                type="button" 
                className={`animate-in text-sm text-white font-bold py-3 px-6 rounded ml-2 ${nsfw ? "bg-pink-900 hover:bg-pink-800":"bg-green-900 hover:bg-green-800"}`}
                
                >
                  {nsfw ? "NSFW" : "SFW"}
                </button>
              </span>
              </>     

            )}
          </div>
        </div>
      </div>
      {(selectingTags) && 
      <TagSelector key={tagSearch} tagSearch={tagSearch} tagsChanged={(newTags:string[])=>{ updateTags(newTags) }} selectedTagsInput={selectedTags} ref={tagSelectorRef} />}
    </>
  );
};

export default SearchInput;