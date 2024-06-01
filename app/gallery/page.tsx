"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import Search from "@/components/neroshitron/search";

function PageComponent() {

  const supabase = createClient();

  const getData = async () => {
  }
  
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="w-full">
      <div className="fixed w-full h-full overflow-hidden z-0 animate-fade-left animate-fade-left animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards">
        <img
          src="gallery_girl.png"
          className="float-right object-cover h-screen w-full  lg:w-5/6 xl:w-3/6  opacity-50 overflow-hidden"
          alt="Background"
        />
      </div>
        <Search/>
    </div>
  );
}

export default PageComponent;