import React, { useState, useEffect } from 'react';

function PageComponent() {

  const getData = async () => {
  }

  return ( 
    <div className="p-40 h-full w-full animate-in"> {/* This adds padding top of 20px */}
      <div className="flex">
        <iframe
          className="flex-grow"
          style={{flexBasis: '90%'}} // Video takes up 90% of the width
          src="http://localhost:8080/embed/video"
          title="Owncast"
          height={720}
          referrerPolicy="origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="flex-2"
          style={{flexBasis: '10%'}} // Chat takes up 10% of the width
          src="http://localhost:8080/embed/chat/readwrite"
          title="Owncast"
          referrerPolicy="origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default PageComponent;