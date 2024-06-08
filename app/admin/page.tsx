"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react'; 
import { useRouter } from 'next/navigation';
function PageComponent() {
  const supabase = createClient();
  const getData = async () => {
  }

  useEffect(() => {
    getData();
  }, []);
  const router = useRouter();
  return (
    <div className="w-full text-white flex justify-center items-center animate-in">
        <div className="w-2/3 lg:w-1/3 rounded-md bg-primary p-8 mt-32 shadow-lg opacity-90 backdrop-blur-lg">
            <div className="w-full flex justify-center">
                <span className="text-2xl pb-4">System Settings</span>
            </div>
            <div className="flex justify-center ">
              <button onClick={()=>{ router.push("/admin/tiers") }} className="bg-secondary hover:bg-secondary-dark rounded p-2 mr-1 w-full">Tiers Management</button>
              <button onClick={()=>{ router.push("/gallery/admin") }} className="ml-1 bg-secondary hover:bg-secondary-dark rounded p-2 w-full">Gallery Management</button>

            </div>
            <div className="flex justify-center pt-2">
              <button onClick={()=>{ router.push("/admin/theme") }} className="mr-1 bg-secondary hover:bg-secondary-dark rounded p-2 mr-1 w-full">Theme Settings</button>
              <button className="bg-secondary hover:bg-secondary-dark rounded p-2 ml-1 w-full">User Management</button>
            </div>
            <div className="flex justify-center pt-2">
              <button className="bg-secondary hover:bg-secondary-dark rounded p-2 w-full mr-1">Payment/Payout Settings</button>
              <button className="bg-secondary hover:bg-secondary-dark rounded p-2 w-full ml-1">Comissions Settings</button>
            </div>
        </div>
    </div>
  );
}

export default PageComponent;



