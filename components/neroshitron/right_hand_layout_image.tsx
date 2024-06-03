"use client;"
import React from 'react';

const RightHandLayoutImage: React.FC = () => {
    return (
        <div className="fixed w-full h-full overflow-hidden z-0 animate-fade-left animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards">
            <img
                src="/gallery_girl.png"
                className="float-right object-cover h-screen w-full lg:w-5/6 xl:w-3/6 opacity-50 overflow-hidden"
                alt="Background"
            />
        </div>
    );
};

export default RightHandLayoutImage;