"use client;"
import React, { useState, useEffect } from 'react';

interface TagProps { onTagClicked: (tag: string ) => void, selected:boolean, tag:string }

const Tag = ({ onTagClicked, selected, tag, }:TagProps) => {

    return (
        <button
        key={tag+"-button"}
        type="button"
          className={`animate-in w-full m-4 rounded-md no-underline text-white py-1 font-medium text-center ${selected ? 'hover:bg-pink-800 bg-pink-900' : 'hover:bg-neroshi-blue-700 bg-neroshi-blue-800'}`}
          onClick={() => onTagClicked(tag)}
        >
          {tag}
        </button>
    );
};

export default Tag; 