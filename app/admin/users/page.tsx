"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from 'react'; 

function PageComponent() {
  const supabase = createClient();
  const [users, setUsers] = useState<any[]>([]);
  const getData = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setUsers(data.users);
      } else {
        console.error('failed to fetch tiers');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    
    <div className="w-full text-white flex justify-center items-center animate-in">
        <div className="w-2/3 rounded-md bg-primary p-12 mt-32 shadow-lg opacity-90 backdrop-blur-lg">
          <div className="w-2/5 rounded-md bg-secondary-dark p-12 shadow-lg opacity-90 backdrop-blur-lg">
            <input type="text" className="mb-4 mr-2 rounded-md bg-primary p-2 w-full text-white" placeholder="Search all users by email" />
            <div className="w-full h-96 overflow-y-scroll no-scrollbar">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((data, index) => (
                  <tr key={index} className="rounded hover:bg-primary bg-primary-light shadow-lg">
                    <td className="px-4 py-2">{data.email}</td>
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



