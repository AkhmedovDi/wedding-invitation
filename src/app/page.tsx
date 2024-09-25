"use client";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audioPlayer = document.getElementById("react-audio-player");
    if (audioPlayer) {
      if (isPlaying) {
        //eslint-disable-next-line
        //@ts-ignore
        audioPlayer.pause();
        setIsPlaying(false);
      } else {
        //eslint-disable-next-line
        //@ts-ignore
        audioPlayer.play();
        setIsPlaying(true);
      }
    }
  };

  // Function to calculate the time remaining
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-26T16:00:00"); // 26th October 2024, 16:00
    const currentTime = new Date();
    //eslint-disable-next-line
    //@ts-ignore
    const difference = targetDate - currentTime;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url("https://www.southernliving.com/thmb/_DTHAquZBLEHKLIgPi_C3fFIhNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-929904308-aeeb687413714dacace50062cece530a.jpg")',
      }}
    >
      <ReactAudioPlayer
        id="react-audio-player"
        src="https://n1.quvonch.com/uploads/music/2022-11/yahyobek-mominov-muhsinbek-mominov-toylar-muborak.mp3"
        autoPlay={true}
        controls
        className="absolute z-0 opacity-0"
      />

      <div
        className="relative bg-white p-10 w-[550px]"
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.7)" }}
      >
        {/* Content */}
        <div className="relative text-center z-10">
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Hurmatli Mehmonimiz!
          </h1>
          <p className="text-base mb-4">
            Sizni Oybekjon va Saidaxonlarning nikoh to&apos;yida faxriy mehmon
            bo&apos;lishga lutfan taklif qilamiz.
          </p>
          <p className="text-base mb-4">
            Qalblar ezguliklarga to‘la bo‘lgan ushbu qutlug‘ kunda do‘stlar
            yonida bo‘ling!
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Bayramni boshlash vaqti: <b>26.10.2024 / 16:00</b>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Manzil: <b>&quot;Qandak To‘yxonasi&quot;</b>
          </p>

          <div className="mt-6">
            <a
              target="_blank"
              href="https://maps.app.goo.gl/KRDCMKKaf5h4pdhX6"
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Manzilni xarita orqali ochish
            </a>
          </div>

          {/* Countdown Timer (Static example) */}
          <div className="mt-10 flex justify-center space-x-4">
            <div className="bg-[#37CF74] p-4 rounded-lg">
              <span className="text-2xl text-gray-600 font-normal">
                {timeLeft.days}
              </span>
              <p className="text-sm text-gray-600">Kun</p>
            </div>
            <div className="bg-[#37CF74] p-4 rounded-lg">
              <span className="text-2xl text-gray-600 font-normal">
                {timeLeft.hours}
              </span>
              <p className="text-sm text-gray-600">Soat</p>
            </div>
            <div className="bg-[#37CF74] p-4 rounded-lg">
              <span className="text-2xl text-gray-600 font-normal">
                {timeLeft.minutes}
              </span>
              <p className="text-sm text-gray-600">Daqiqa</p>
            </div>
            <div className="bg-[#37CF74] p-4 rounded-lg">
              <span className="text-2xl text-gray-600 font-normal">
                {timeLeft.seconds}
              </span>
              <p className="text-sm text-gray-600">Soniya</p>
            </div>
          </div>

          {/* Play Button */}
          <div className="mt-6">
            <button
              onClick={toggleAudio}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              {isPlaying ? "Pause Song" : "Play Song"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
