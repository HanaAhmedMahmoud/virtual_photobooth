/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Link from 'next/link';
import { useState } from 'react';
export default function connectPage() {
  const [input, setInput] = useState(''); 
  return (
    <div className="h-screen flex items-center justify-center text-9xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex flex-col justify-content items-center">
            <h1 className="text-center mt-5">STEP INTO A BOOTH</h1>
            <h2 className="text-5xl mb-5">ENTER JOINING CODE ^-^ </h2>
            <input className="w-5/6 bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] py-2 px-5 mx-10 text-center rounded-2xl" id="code" type="text" placeholder="XXXX XXX"
            value={input}
            onChange={(e) => {
            setInput(e.target.value);
    }}></input>
            <Link href="/connectToBoothPage"> 
              <button className="h-20 w-110 my-10 bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110">
                <div className="flex flex-row items-center justify-center space-x-5"> 
                  <img src="camera.svg" alt="camera"></img>
                  <h2 className="text-7xl text-[#D1029D]">LETS SNAP!</h2>
                </div>
                </button>
            </Link>
        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}
