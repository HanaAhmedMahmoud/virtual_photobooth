'use client'
import Link from 'next/link';
import { useState } from 'react';
export default function connectPage() {
  const code = "PLACEHOLDER";
  const [message, setMessage] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setMessage("copied successfully :)") 
    } catch (err) {
      setMessage("error occurred :(")
    }
  };

  return (
    <div className="h-screen flex items-center justify-center text-9xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex flex-col justify-content items-center">
            <h1 className="text-center mt-5">BOOTH CREATED</h1>
            <h2 className="text-5xl mb-5">SHARE THIS CODE ^-^ </h2>
            <h2 className="w-5/6 bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] py-2 px-5 mx-10 text-center rounded-2xl">{code}</h2>
            <button className="h-20 w-110 mt-8 bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110"
                onClick={handleCopy}>
                <div className="flex flex-row items-center justify-center space-x-5"> 
                  <img src="copy.svg" alt="camera"></img>
                  <h2 className="text-7xl text-[#D1029D]">COPY CODE</h2>
                </div>
            </button>
            {message && (
            <p className="text-xl text-[#D1029D] mt-4">{message}</p>
            )}
        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}
