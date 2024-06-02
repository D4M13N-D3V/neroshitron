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
    
    <div className="w-full text-white flex justify-center items-center animate-in">
        <div className="w-2/3 rounded-md bg-primary p-12 mt-32">
            Test
        </div>
    </div>
  );
}

export default PageComponent;