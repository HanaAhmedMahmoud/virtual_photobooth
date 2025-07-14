'use client'
import { useRouter } from 'next/navigation';
import {useEffect, useRef, useState} from 'react'

export default function photoboothPage() {
  const videoRef = useRef<HTMLVideoElement|null>(null); 
  const canvasRef = useRef<HTMLCanvasElement|null>(null); 

  const router = useRouter(); 
  
  const cameraSound = typeof Audio !== "undefined" ? new Audio('/camera.mp3') : null;
  const beepSound = typeof Audio !== "undefined" ? new Audio('/beep.mp3') : null;

  const [countdownStep, setCountdownStep] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(1); 
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]); 
  const [photoDone, setPhotoDone] = useState<Boolean>(false); 
  const [showFlash, setShowFlash] = useState(false);

  const totalPhotos = 4 

  const countDownSteps = ['PHOTO ','3...','2...','1...','SAY CHEESE!']; 

  //webcam!
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
   }, []);

   //start photobooth when page loads 
   useEffect(() => {
    startPhotobooth();
  }, []); 

    const startCountdown = async (photoNum: number) => {
        const steps = [...countDownSteps];
        steps[0] = steps[0] + photoNum;
        for (let i = 0; i < steps.length; i++) {
            if(i != 0 && i != steps.length - 1){
                beepSound?.play();
            }
            setCountdownStep(steps[i]);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        setCountdownStep(null);
        setShowFlash(true);
        setTimeout(() => setShowFlash(false), 200);
        cameraSound?.play();
        takePhoto(photoNum);
    };

    const takePhoto = (currentPhotoNum: number) => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        if (canvas && video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(video, 0, 0);
            const imageData = canvas.toDataURL('image/png');
            setCapturedPhotos((prev) => [...prev, imageData]);
        }

        const nextIndex = currentPhotoNum + 1;
        setPhotoIndex(nextIndex);

        if (nextIndex <= totalPhotos) {
            setTimeout(() => startCountdown(nextIndex), 1000);
        } else {
            setPhotoDone(true);
        }
        };

    const startPhotobooth = () => {
        setCapturedPhotos([]);
        setPhotoIndex(1); // start from 1
        setPhotoDone(false);
        startCountdown(1);
    };


  return (
    <div className="h-screen flex items-center justify-center text-8xl relative">
      <div className="absolute top-7 left-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
      <div className="bg-white h-2/3 w-2/3 outline-solid outline-4 outline-[#FFDBFB]">
        <div className="flex flex-col justify-center items-center">
            {countdownStep && (
                <h1 className="text-center my-4">
                {countdownStep}
                </h1>
             )}
             
            {!countdownStep && !photoDone && (
                <h1 className="text-white my-4">
                {countdownStep} PLACEHOLDER
                </h1>
             )}

            {photoDone && (
                 <button className="h-20 w-110 my-8 text-7xl bg-[#FFDBFB] outline-solid outline-2 outline-[#D1029D] rounded-3xl hover:scale-110"
                 onClick={() => router.push('/finalPage')}>RESULTS</button>
            )}

            <div className="relative bg-[#FFDBFB] w-[520px] h-[395px] flex items-center justify-center"> 
                <video ref={videoRef} autoPlay className="absolute shadow-lg w-[500px] h-[375px]" />
                <canvas ref={canvasRef} className="hidden" />
            </div>

            {showFlash && (
                <div className="fixed top-0 left-0 w-full h-full bg-white opacity-90 animate-fadeOut" />
            )}      
      </div>

      </div>
      <div className="absolute bottom-7 right-30">
        <img src="/heart.svg" alt="heart"></img>
      </div>
    </div>
  );
}
