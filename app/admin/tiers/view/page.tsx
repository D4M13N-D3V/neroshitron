"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function PageComponent() {
    const router = useRouter();
    const supabase = createClient();
    const [tier, setTier] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [color, setColor] = useState<string>('#000000');
    const getData = async () => {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const name = searchParams.get('name');
            const response = await fetch('/api/tiers/'+name);
            if (response.ok) {
                const data = await response.json();
                setTier(data);
                setName(data.name);
                setPrice(data.price);
                setDescription(data.description);
                setColor(data.color);
            } else {
                console.error('failed to fetch tiers');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            newName:name,
            price,
            color,
            description
        };
        const response = await fetch('/api/tiers/'+name, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            window.location.href = "/admin/tiers";
        } else {
            console.log(response);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="w-full p-8 h-1/2 text-white lg:flex justify-center items-center animate-in">
            <div className="w-full lg:w-1/3 rounded-md bg-primary opacity-90 p-12 m-1 mt-32 shadow-lg backdrop-blur">
                <form onSubmit={handleSubmit}>
                    <div className="w-full flex">
                        <span className="text-2xl pb-4">Editing Existing Tier</span>
                    </div>
                    <div className="w-full flex">
                        <input
                            value={name}
                            required
                            type="text"
                            onChange={(e) => { setName(e.target.value) }}
                            className="mr-2 rounded-md bg-info-bright p-2 w-1/2 text-black shadow-lg"
                            placeholder="Tag Name"
                        />
                        <div className="flex border border-gray-300 w-1/2 rounded-md">
                            <span className="flex items-center bg-gray-100 rounded-l-md border-r px-3 text-gray-500">
                                $
                            </span>
                            <input
                                value={price}
                                onChange={(e) => { setPrice(Number(e.target.value)) }}
                                required
                                placeholder="Price in USD per month"
                                type="number"
                                className="flex-1 min-w-0 bg-info-bright rounded-r-md px-3 py-2 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="w-full pt-2 justify-center flex">
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            required
                            placeholder="Description of the tier and what the user gets from subscribing."
                            rows={3}
                            className="w-full rounded-md bg-info-bright p-2 w-1/2 text-black shadow-lg"
                        ></textarea>
                    </div>
                    <div className="w-full pt-2 justify-center flex">
                        <div className="w-1/2 relative">
                            <input
                                value={color}
                                required
                                type="text"
                                className="w-full rounded-md bg-info-bright p-2 text-black shadow-lg"
                                onChange={(e) => { setColor(e.target.value) }}
                                placeholder="Choose the tiers color"
                            />
                            <input
                                value={color}
                                onChange={(e) => { setColor(e.target.value) }}
                                required
                                id="colorInput"
                                type="color"
                                className="absolute right-0 top-0 w-10 h-full rounded-r p-1"
                            />
                        </div>
                        <button onClick={() => { }} className="hover:scale-95 shadow-lg ml-2 w-1/2 h-10 text-center bg-warning hover:bg-warning-light text-white font-bold rounded flex items-center justify-center">
                            Update
                        </button>
                        <button type="button" onClick={() => { }} className="hover:scale-95 shadow-lg ml-2 w-1/2 h-10 text-center bg-error hover:bg-error-light text-white font-bold rounded flex items-center justify-center">
                            Delete
                        </button>
                        <button type="button" onClick={() => { router.push("/admin/tiers") }} className="hover:scale-95 shadow-lg ml-2 w-1/2 h-10 text-center bg-error-dark hover:bg-error text-white font-bold rounded flex items-center justify-center">
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PageComponent;



