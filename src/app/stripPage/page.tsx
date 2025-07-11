'use client'
import Link from "next/link";
import React, { useState } from 'react';

export default function stripPage() {

  const [solo, setSoloClicked] = useState(false);
  const [duo, setDuoClicked] = useState(false)

  const handleSoloClick = () => {
    setSoloClicked(true); 
    setDuoClicked(false);
  };

  const handleDuoClick = () => {
    setSoloClicked(false); 
    setDuoClicked(true);
  };

  return (
    <div className="h-screen flex items-center justify-center text-9xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center">SELECT STRIP TYPE</h1>
            <div className="flex flex-row items-start space-x-20"> 
                <button onClick={handleSoloClick} 
                className={`w-auto flex-shrink-0 ${
                    solo ? 'scale-110' : 'scale-90 filter grayscale'
                }`}
                >
                    <img src="/verticalStrip.svg" alt="vertical strip" className="hover:scale-110 h-auto max-h-60"></img>
                </button>
            
               <button onClick={handleDuoClick} 
               className={`w-auto flex-shrink-0 ${
                    duo ? 'scale-110' : 'scale-90 filter grayscale'
                }`}
                >
                    <img src="/sqaureStrip.svg" alt="sqaure strip" className="hover:scale-110 h-auto max-h-60"></img>
               </button>
            </div>
            <Link href="/soloOrDuoPage">
              <button className="h-20 w-110 my-10 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110">CONFIRM</button>
            </Link>
        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}