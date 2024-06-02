"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react'; 

function PageComponent() {
  const supabase = createClient();

  const getData = async () => {
  }
  const fakeData = [
    { email: 'example1@example.com', ip: '192.168.0.1' },
    { email: 'example2@example.com', ip: '192.168.0.2' },
    { email: 'example3@example.com', ip: '192.168.0.3' },
    { email: 'example1@example.com', ip: '192.168.0.1' },
    { email: 'example2@example.com', ip: '192.168.0.2' },
    { email: 'example3@example.com', ip: '192.168.0.3' },
    { email: 'example1@example.com', ip: '192.168.0.1' },
    { email: 'example2@example.com', ip: '192.168.0.2' },
    { email: 'example3@example.com', ip: '192.168.0.3' },
    { email: 'example1@example.com', ip: '192.168.0.1' },
    { email: 'example2@example.com', ip: '192.168.0.2' },
    { email: 'example3@example.com', ip: '192.168.0.3' },
    { email: 'example1@example.com', ip: '192.168.0.1' },
    { email: 'example2@example.com', ip: '192.168.0.2' },
    { email: 'example3@example.com', ip: '192.168.0.3' },
    { email: 'example1@example.com', ip: '192.168.0.1' },
    { email: 'example2@example.com', ip: '192.168.0.2' },
    { email: 'example3@example.com', ip: '192.168.0.3' },
    { email: 'example1@example.com', ip: '192.168.0.1' },
    { email: 'example2@example.com', ip: '192.168.0.2' },
    { email: 'example3@example.com', ip: '192.168.0.3' },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    
    <div className="w-full text-white flex justify-center items-center animate-in">
        <div className="w-2/3 rounded-md bg-primary p-12 mt-32">
          <div className="w-1/2 rounded-md bg-primary-dark p-12">
            <input type="text" className="mb-4 mr-2 rounded-md bg-primary p-2 w-full text-white" placeholder="Search all users by email" />
            <div className="w-full h-96 overflow-y-scroll no-scrollbar">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="h-44">
                {fakeData.map((data, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{data.email}</td>
                    <td className="px-4 py-2">{data.ip}</td>
                    <td className="px-4 py-2"><button className="p-2 rounded w-full hover:bg-primary-light bg-primary">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PageComponent;



