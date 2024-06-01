"use client;"
import React, { useState, useEffect } from 'react';

interface SearchProps { }

const TagSelector = ({ }:SearchProps) => {


  const getData = async () => {
  }

    useEffect(() => {
        getData();
    }, []);
  
    return (
        <div className={`fixed inset-0 transition-opacity z-30 animate-in`} aria-hidden="true" >
            <div className="absolute inset-0 bg-neroshi-blue-900 opacity-70 z-30">
            </div>
            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar pt-2 w-full p-20 z-30">
                Test
            </div>
        </div>
    );
};

export default TagSelector;