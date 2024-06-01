"use client";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import GalleryThumbnail from "@/components/ui/gallery_thumbnail";


import React, { useState, useEffect } from 'react';
import { User } from "@supabase/supabase-js";
import Gallery from "@/components/ui/gallery";
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
        <Search/>
    </div>
  );
}

export default PageComponent;