/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useState } from "react";
import { useNumOfPeopleStore, usePhotoStore, useStripStore } from "../store";


export default function connectPage() {
  const stripType = useStripStore((state) => state.stripType); 
  const numOfPeople = useNumOfPeopleStore((state) => state.peopleCount); 
  const [vertical, setVertical] = useState(false); 
  const [solo, setSolo] = useState(false); 
  const capturedPhotos = usePhotoStore((state) => state.capturedPhotos);

  useEffect(() => {
    setVertical(stripType === "vertical");
    console.log(stripType)
    console.log(solo)
    setSolo(numOfPeople === 1);
  }, [stripType, numOfPeople]);


  return (
    <div className="h-screen flex items-center justify-center text-8xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-row justify-center items-center"> 
          {!vertical && (
              <div>
                 <img src="/verticalStrip.svg" alt="vertical strip" className="h-auto max-h-100 mx-20 relative"></img>
                  <div className="grid grid-rows-4 gap-3 absolute top-54 left-124">
                  {[0, 2, 4, 6].map((index) => {
                    return (
                      <img
                        key={index}
                        src={capturedPhotos[index]}
                        alt={`Photo ${index + 1}`}
                        className="w-[120px] h-[73px] rounded-xl border-4 border-[#FFDBFB] shadow-md"
                      />
                    );
                  })}
                </div>
              </div> )}
              {vertical && (
              <div>
                 <img src="/sqaureStrip.svg" alt="square strip" className="h-auto max-h-120 mx-10 relative"></img>
                 <div className="grid grid-rows-2 grid-cols-2 gap-3 absolute top-68 left-100">
                  {[0, 2, 4, 6].map((index) => {
                    return (
                      <img
                        key={index}
                        src={capturedPhotos[index]}
                        alt={`Photo ${index + 1}`}
                        className="w-[150px] h-[100px] rounded-xl border-4 border-[#FFDBFB] shadow-md "
                      />
                    );
                  })}
                </div>
              </div> )}
            </div>
            <div className="flex flex-col justify-center items-center">
               <h1 className="text-center">RESULTS</h1>
                <button className="h-20 w-80 my-5 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110">SAVE</button>
                <button className="h-20 w-80 my-5 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110">RESTART</button>
            </div>    
        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}
