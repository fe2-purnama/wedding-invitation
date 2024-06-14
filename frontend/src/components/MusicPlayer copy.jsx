/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import weddingMusic from "../assets/audio/music.mp3"

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(new Audio(weddingMusic));

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    };

  return (
    <button onClick={toggleMusic} className="bg-gray-400 text-white text-2xl fixed bottom-5 right-5 rounded-full w-14 h-14 ">
      <i className="fa fa-compact-disc"></i>
    </button>
  );
};

export default MusicPlayer;
