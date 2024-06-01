"use client;"
import React, { useState, useEffect } from 'react';

interface TagProps { onTagClicked: (tag: string ) => void, selected:boolean, tag:string }

const Tag = ({ onTagClicked, selected, tag, }:TagProps) => {

    return (
        <a
          key={"select-tags"}
          className={`w-full m-4 rounded-md no-underline text-white py-1 font-medium text-center ${selected ? 'hover:bg-pink-800 bg-pink-900' : 'hover:bg-neroshi-blue-700 bg-neroshi-blue-800'}`}
          href="#"
          onClick={() => onTagClicked(tag)}
        >
          {tag}
        </a>
    );
};

export default Tag; 