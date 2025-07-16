'use client'
import { useNumOfPeopleStore, useStripStore } from "../store";

export default function connectPage() {
  const stripType = useStripStore((state) => state.stripType); 
  const numOfPeople = useNumOfPeopleStore((state) => state.peopleCount); 
  return (
    <div className="h-screen flex items-center justify-center text-8xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex flex-col justify-content items-center">
            <h1 className="text-center mt-15">RESULTS?</h1>
            <h1>strip type = {stripType}</h1>
            <h1>number of people = {numOfPeople}</h1>
        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}
