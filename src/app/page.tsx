import Link from 'next/link';
export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-9xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex flex-col justify-content items-center">
            <h1 className="text-center mt-15">WELCOME TO THE VIRTUAL PHOTOBOOTH</h1>
            <Link href="/stripPage">
              <button className="h-20 w-110 my-10 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110">BEGIN</button>
            </Link>
        </div>
      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}
