import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Gallery() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center animate-in">
        <div className="absolute w-full h-full">
      <img src="gallery_girl.png" className="float-right object-cover h-screen w-3/6 animate-fade-up animate-duration-[3000ms]" alt="Background" />
    </div>        
    <h1 className="animate-jump animate-duration-1000 animate-ease-linear z-10 pt-20 text-7xl text-center text-white text-shadow-purple-grey-glow absolute">Neroshi's Gallery</h1>

    <div className="grid grid-cols-3 gap-4 z-50 pt-60 ">
        <a href="#" className="animate-fade animate-duration-1000 animate-delay-[2000ms] animate-ease-linear block w-64 h-64 max-w-sm p-6  bg-opacity-50 backdrop-blur rounded-lg shadow hover:bg-gray-100 hover:bg-opacity-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-shadow-purple-grey-glow">Gallery Name</h5>
        </a>
        <a href="#" className="animate-fade animate-duration-1000 animate-delay-[2000ms] animate-ease-linear block w-64 h-64 max-w-sm p-6  bg-opacity-50 backdrop-blur rounded-lg shadow hover:bg-gray-100 hover:bg-opacity-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-shadow-purple-grey-glow">Gallery Name</h5>
        </a>
        <a href="#" className="animate-fade animate-duration-1000 animate-delay-[2000ms] animate-ease-linear block w-64 h-64 max-w-sm p-6  bg-opacity-50 backdrop-blur rounded-lg shadow hover:bg-gray-100 hover:bg-opacity-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-shadow-purple-grey-glow">Gallery Name</h5>
        </a>
        <a href="#" className="animate-fade animate-duration-1000 animate-delay-[2000ms] animate-ease-linear block w-64 h-64 max-w-sm p-6  bg-opacity-50 backdrop-blur rounded-lg shadow hover:bg-gray-100 hover:bg-opacity-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-shadow-purple-grey-glow">Gallery Name</h5>
        </a>
        <a href="#" className="animate-fade animate-duration-1000 animate-delay-[2000ms] animate-ease-linear block w-64 h-64 max-w-sm p-6  bg-opacity-50 backdrop-blur rounded-lg shadow hover:bg-gray-100 hover:bg-opacity-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-shadow-purple-grey-glow">Gallery Name</h5>
        </a>
        <a href="#" className="animate-fade animate-duration-1000 animate-delay-[2000ms] animate-ease-linear block w-64 h-64 max-w-sm p-6  bg-opacity-50 backdrop-blur rounded-lg shadow hover:bg-gray-100 hover:bg-opacity-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-shadow-purple-grey-glow">Gallery Name</h5>
        </a>
    </div>
    
    </div>
  );
}
