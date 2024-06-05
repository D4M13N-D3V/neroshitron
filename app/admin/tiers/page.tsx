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


const fakeData = [
    {
        description: "Lorem ipsum dolor sit amet",
        color: "#5e3573",
        price: 9.99,
        name: "Product 1"
    },
    {
        description: "Consectetur adipiscing elit",
        color: "#00FF00",
        price: 19.99,
        name: "Product 2"
    },
    {
        description: "Sed do eiusmod tempor incididunt",
        color: "#0000FF",
        price: 29.99,
        name: "Product 3"
    }
];

// Rest of the code...

return (
    <div className="w-2/3 p-8 h-1/2 text-white lg:flex justify-center items-center animate-in">
        <div className="w-full lg:w-1/3 rounded-md bg-primary opacity-90 p-12 m-1 mt-32 shadow-lg backdrop-blur">
            <div className="w-full flex justify-center">
                <button className="bg-success hover:bg-success-light rounded p-2 w-full">Create New Tier</button>
            </div>
            <div className="w-full justify-center pt-8">
                {fakeData.map((item, index) => (
                    <div className="w-full flex justify-center">
                        <div key={index} className="text-white w-full text-stroke mt-2">
                            <button className="py-2 w-full rounded hover:scale-105" style={{ backgroundColor: item.color }}>{item.name}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}

export default PageComponent;



