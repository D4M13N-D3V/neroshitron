"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react'; 

function PageComponent() {
  const supabase = createClient();
  const getData = async () => { 
  }

  useEffect(() => {
    getData();
  }, []);
return (
    <div className="w-full p-8 h-1/2 text-white lg:flex justify-center items-center animate-in">
        <div className="w-full lg:w-1/3 rounded-md bg-primary opacity-90 p-12 m-1 mt-32 shadow-lg backdrop-blur">
            <div className="w-full flex">
                <input type="text" onChange={(e)=>{}} 
                className="mr-2 rounded-md bg-info-bright p-2 w-1/2 text-black shadow-lg" 
                placeholder="Tag Name" />
                <div className="flex border border-gray-300 w-1/2 rounded-md">
                    <span className="flex items-center bg-gray-100 rounded-l-md border-r px-3 text-gray-500">
                        $
                    </span>
                    <input 
                        placeholder="Price in USD per month"
                        type="number" 
                        className="flex-1 min-w-0 bg-info-bright rounded-r-md px-3 py-2 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                    />
                </div>  
            </div>
            <div className="w-full pt-2 justify-center flex">
                <textarea placeholder="Description of the tier and what the user gets from subscribing." rows={3} className="w-full rounded-md bg-info-bright p-2 w-1/2 text-black shadow-lg">

                </textarea>
            </div>
            <div className="w-full pt-2 justify-center flex">
                <div className="w-1/2 relative">
                    <input type="text" className="w-full rounded-md bg-info-bright p-2 text-black shadow-lg" onChange={(e)=>{}} placeholder="Choose the tiers color"/>
                    <input id="colorInput" type="color" className="absolute right-0 top-0 w-10 h-full rounded-r p-1"/>
                </div>
                <div className="w-1/2 flex">
                    <button onClick={()=>{}} className="hover:scale-95 shadow-lg ml-2 w-1/2 h-10 text-center bg-warning hover:bg-warning-light text-white font-bold rounded flex items-center justify-center">
                        Update
                    </button>
                    <button onClick={()=>{}} className="hover:scale-95 shadow-lg ml-2 w-1/2 h-10 text-center bg-error hover:bg-error-light text-white font-bold rounded flex items-center justify-center">
                        Delete
                    </button>
                    <button onClick={()=>{}} className="hover:scale-95 shadow-lg ml-2 w-1/2 h-10 text-center bg-error-dark hover:bg-error text-white font-bold rounded flex items-center justify-center">
                        Back
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}

export default PageComponent;



