"use client;"
import React, { useState, useEffect } from 'react';

interface TagProps { onTagClicked: (tag: string ) => void, selected:boolean, tag:string }

const Tag = ({ onTagClicked, selected, tag, }:TagProps) => {

    return (
        <button
        type="button"
          className={`animate-in w-full h-8 rounded-md no-underline text-sm text-white py-1 font-medium text-center ${selected ? 'hover:bg-pink-800 bg-pink-900' : 'hover:bg-pink-600 bg-neroshi-blue-800 border-neroshi-blue-900 border-2'}`}
          onClick={() => onTagClicked(tag)}
        >
          {tag}
        </button>
    );
};

export default Tag; 