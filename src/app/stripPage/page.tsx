/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Link from "next/link";
import React, { useState } from 'react';
import { useStripStore } from "../store";

export default function stripPage() {

  const [vertical, setVerticalClicked] = useState(true);
  const [square, setSquareClicked] = useState(false)
  const setStrip = useStripStore((state) => state.updateStripType);

  const handleVerticalClick = () => {
    setVerticalClicked(true); 
    setSquareClicked(false);
  };

  const handleSqaureClick = () => {
    setVerticalClicked(false); 
    setSquareClicked(true);
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
                <button onClick={handleVerticalClick} 
                className={`w-auto flex-shrink-0 ${
                    vertical ? 'scale-110' : 'scale-90 filter grayscale'
                }`}
                >
                    <img src="/verticalStrip.svg" alt="vertical strip" className="hover:scale-110 h-auto max-h-60"></img>
                </button>
            
               <button onClick={handleSqaureClick} 
               className={`w-auto flex-shrink-0 ${
                    square ? 'scale-110' : 'scale-90 filter grayscale'
                }`}
                >
                    <img src="/sqaureStrip.svg" alt="sqaure strip" className="hover:scale-110 h-auto max-h-60"></img>
               </button>
            </div>
            <Link href="/soloOrDuoPage">
              <button className="h-20 w-110 my-10 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110"
              onClick={() => {
                  setStrip(vertical ? "vertical" : "square");
               }}>CONFIRM</button>
            </Link>
        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}