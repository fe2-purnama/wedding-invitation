// import React, { useEffect, useRef, useState } from 'react';

// const MusicPlayer = () => {
//   const audioRef = useRef(new Audio('../assets/audio/musik.mp3'));
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     // Try to play the audio automatically on component mount
//     const playAudio = () => {
//       audioRef.current.play().then(() => {
//         setIsPlaying(true);
//       }).catch(error => {
//         console.error("error:", error);
//         setIsPlaying(false);
//       });
//     };

//     playAudio();

//     // Event listener for visibility change
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === 'hidden') {
//         audioRef.current.pause();
//       } else if (isPlaying) {
//         audioRef.current.play().catch(error => {
//           console.error("error:", error);
//         });
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);

//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, [isPlaying]);

//   const toggleAudio = () => {
//     const audio = audioRef.current;

//     if (isPlaying) {
//       audio.pause();
//       setIsPlaying(false);
//     } else {
//       audio.play().then(() => {
//         setIsPlaying(true);
//       }).catch(error => {
//         console.error("error:", error);
//         setIsPlaying(false);
//       });
//     }
//   };

//   return (
//     <button id="toggleButton" onClick={toggleAudio} className="bg-gray-400 text-white text-2xl fixed bottom-5 right-5 rounded-full w-14 h-14 animate-spin tablet:text-xl">
//       <i className="fa fa-compact-disc"></i>
//     </button>
//   );
// };

import React, { useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Keadaan awal, musik berjalan

  useEffect(() => {
    audioRef.current = new Audio('../assets/audio/music.mp3');
    audioRef.current.play().catch(error => {
      console.error("error:", error);
      setIsPlaying(false);
    });

    // Deteksi perubahan visibilitas halaman
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("error:", error);
          setIsPlaying(false);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audioRef.current.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("error:", error);
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={toggleAudio} className="bg-gray-400 text-white text-2xl fixed bottom-5 right-5 rounded-full w-14 h-14 animate-spin">
      <i className="fa fa-compact-disc"></i>
    </button>
  );
};

export default MusicPlayer;
