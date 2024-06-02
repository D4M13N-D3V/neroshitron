"use client;"
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import TagSelector from '../neroshitron/tag_selector';
import Select from "react-tailwindcss-select";
import { SelectValue } from 'react-tailwindcss-select/dist/components/type';
import { Option } from 'react-tailwindcss-select/dist/components/type';

interface SearchInputProps {
  tagsChanged: (tags: string[]) => void;
  searchChanged: (search: string) => void;
  nsfwChanged: (nsfw: boolean) => void;
  nsfwButtonEnabled: boolean | null;
  placeholderTags: Option[];
}

const SearchInput = ({ tagsChanged, searchChanged, nsfwChanged, nsfwButtonEnabled, placeholderTags }: SearchInputProps) => {

  const [tagSearch, setTagSearch] = useState<string>('');
  const [nsfw, setNsfw] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTagsInput, setSelectedTagsInput] = useState<Option[]>(placeholderTags);
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

  const onTagsClosed = (tags: string[]) => {
    setSelectingTags(false);
  }

  const openTags = () => {
    setSelectingTags(true);
    if (selectingTags) {
      onTagsClosed(selectedTags);
    }
  }

  useEffect(() => {
    
    tagsChanged(selectedTags.filter(tag => tag != "neroshi"));
  }, [selectedTags]);
  useEffect(() => {
    nsfwChanged(nsfw);
  }, [nsfw]);
  useEffect(() => {
    getData();
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
  }, []);

  const tagOptions = tags.map((tag: { name: string; }) => ({ value: tag.name, label: "🏷️ "+tag.name }));
  return (
    <>
      <div className={` ${scrollPosition>0 ?? 'opacity-30'} opacity 0 relative w-full flex flex-col items-center justify-center z-10`}>
        <div className="search-box mx-auto my-auto w-full">
          <div className={`${scrollPosition>0 ?? 'opacity-30'} opacityflex flex-row`}>

            {(selectingTags) ? (
              <>
                <input autoFocus value={tagSearch} onChange={(e) => setTagSearch(e.target.value)} className="rounded-l-md h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600" type="text" placeholder="Looking for specific tag?" />

                <span className="flex items-center bg-gray-100  rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
                  <button key="back" onClick={() => { openTags() }} type="button" className={`animate-in bg-pink-900 hover:bg-pink-800 text-lg text-white font-bold py-3 px-6 rounded`}>
                    Back
                  </button>

                </span>
              </>
            )
              : (
                <>
                  <Select isMultiple isSearchable isClearable searchInputPlaceholder='Start typing to search tags...' 
                    options={tagOptions}
                    placeholder="Select tags for your search"
                    onChange={(value: Option | Option[] | null) => {
                      if (value === null) {
                        setSelectedTags([]);
                        setSelectedTagsInput([]);
                      }
                      if (Array.isArray(value)) {
                        setSelectedTags(value.map((option) => option.value));
                        setSelectedTagsInput(value as Option[])
                      } else if (value) {
                        setSelectedTags([value.value]);
                        setSelectedTagsInput([value])
                      }
                    }}
                    classNames={{
                    }}
                    value={selectedTagsInput} 
                    primaryColor={"indigo"} />

                  {(nsfwButtonEnabled) ?? (
                  <span className="flex items-center  border-0 font-bold text-grey-100">
                    <button
                      onClick={() => { setNsfw(!nsfw) }}
                      type="button"
                      className={`animate-in text-sm text-white font-bold h-full w-16 px-2 rounded rounded-l-none ${nsfw ? "bg-error hover:bg-error-light" : "bg-success hover:bg-success-light"}`}

                    >
                      {nsfw ? "NSFW" : "SFW"}
                    </button>
                  </span>
                  )}
                </>
              )}
          </div>
        </div>
      </div>
      {(selectingTags) &&
        <TagSelector key={tagSearch} tagSearch={tagSearch} tagsChanged={(newTags: string[]) => { updateTags(newTags) }} selectedTagsInput={selectedTags} ref={tagSelectorRef} />}
    </>
  );
};

export default SearchInput;