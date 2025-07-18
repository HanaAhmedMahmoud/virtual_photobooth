/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Link from "next/link";
import React, { useState } from 'react';
import { useNumOfPeopleStore, useStripStore } from "../store";

export default function soloOrDuoPage() {
  const [soloHover, setSoloHover] = useState(false);
  const [duoHover, setDuoHover] = useState(false); 
  const setNumOfPeople = useNumOfPeopleStore((state) => state.updatePeopleCount);
   
  return (
    <div className="h-screen flex items-center justify-center text-9xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center">SOLO OR DUO?</h1>
            <div className="flex flex-row items-start space-x-20"> 

                <div className="flex flex-col items-center"> 
                     <button
                        className={`w-auto flex-shrink-0 ${
                         soloHover ? 'scale-110' : 'scale-90 filter grayscale'
                         }`}>
                        <img src={soloHover ? '/soloClicked.svg' : '/solo.svg'} alt="solo" className="h-auto max-h-60 text-[#D1029D]"></img>
                    </button>
                    
                    <Link href="/photoboothPage">
                     <button 
                      className={`h-20 w-75 my-10 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110 ${
                      soloHover ? 'scale-110' : 'scale-90 filter grayscale'
                      }`}
                      onMouseEnter={() => setSoloHover(true)}
                      onMouseLeave={() => setSoloHover(false)}
                      onClick={() => setNumOfPeople(1)}
                      >
                      SOLO
                    </button>
                    </Link>
                   
    
                </div>
               
               <div className="flex flex-col items-center">
                  <button
                        className={`w-auto flex-shrink-0 ${
                         duoHover ? 'scale-110' : 'scale-90 filter grayscale'
                         }`}>
                        <img src={duoHover ? '/duoClicked.svg' : '/duo.svg'} alt="duo" className="h-auto max-h-60 text-[#D1029D] "></img>
                    </button>
                    
                    <Link href="/connectPage">
                     <button 
                      className={`h-20 w-75 my-10 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110 hover:filter-nones ${
                      duoHover ? 'scale-110' : 'scale-90 filter grayscale'
                      }`}
                      onMouseEnter={() => setDuoHover(true)}
                      onMouseLeave={() => setDuoHover(false)}
                      onClick={() => setNumOfPeople(2)}>
                      DUO
                    </button>
                    </Link>
                   
               </div> 
            </div>


        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}