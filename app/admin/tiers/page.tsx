"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function PageComponent() {
    const router = useRouter();
    const supabase = createClient();
    const [tiers, setTiers] = useState<any[]>([]);
    const getData = async () => {
        try {
            const response = await fetch('/api/tiers');
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setTiers(data);
            } else {
                console.error('Failed to fetch users');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="w-2/3 p-8 h-1/2 text-white lg:flex justify-center items-center animate-in">
            <div className="w-full lg:w-1/3 rounded-md bg-primary opacity-90 p-12 m-1 mt-32 shadow-lg backdrop-blur">
                <div className="w-full flex justify-center">
                    <span className="text-2xl pb-4">Tiers Management</span>
                </div>
                <div className="w-full flex justify-center">
                    <button onClick={() => { router.push("/admin/tiers/create") }} className="bg-success hover:bg-success-light rounded p-2 w-full">New Tier</button>
                    <button onClick={() => { router.push("/admin") }} className="bg-error hover:bg-error-light rounded p-2 w-full ml-2">Back</button>
                </div>
                <div className="w-full justify-center pt-8">
                    {tiers.map((item, index) => (
                        <div className="w-full flex justify-center">
                            <div key={index} className="text-white w-full text-stroke mt-2">
                                <button onClick={() => { router.push("/admin/tiers/view?name=" + item.name) }} className="py-2 w-full rounded hover:scale-105" style={{ backgroundColor: item.color }}>{item.name} - ${item.price}/month</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PageComponent;



