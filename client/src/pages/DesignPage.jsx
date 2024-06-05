/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const imagesEksklusif = [
  { src: "../assets/1e.jpg", alt: "Traditional Bugis Pinishi" },
  { src: "../assets/2e.png", alt: "Majestic Citadel" },
  { src: "../assets/3e.jpg", alt: "Secret Garden New" },
  { src: "../assets/4e.jpg", alt: "Traditional Java" },
  { src: "../assets/5e.jpg", alt: "Traditional Minang" },
  { src: "../assets/6e.jpg", alt: "Traditional Bali" },
  { src: "../assets/7e.jpg", alt: "Blue Ice Lily" },
  { src: "../assets/8e.png", alt: "White Roses" },
  { src: "../assets/9e.jpeg", alt: "Traditional Batak" },
  { src: "../assets/10e.jpeg", alt: "Vintage Minimalist" },
  { src: "../assets/11e.jpeg", alt: "Calm Blue" },
  { src: "../assets/12e.jpeg", alt: "Lotus In Red" },
];

const imagesPremium = [
  { src: "../assets/1p.png", alt: "After Sunset" },
  { src: "../assets/2p.png", alt: "Flowring White" },
  { src: "../assets/3p.png", alt: "Chinese Red" },
  { src: "../assets/4p.png", alt: "Old Ways Red" },
  { src: "../assets/5p.jpg", alt: "Minimaly Autumn" },
  { src: "../assets/6p.png", alt: "Purple Black Vintage" },
];

const imagesBasic = [
  { src: "../assets/1b.jpeg", alt: "Nice Flower" },
  { src: "../assets/2b.jpeg", alt: "Autmn Brown" },
  { src: "../assets/3b.jpeg", alt: "Pink Rose Gold" },
  { src: "../assets/4b.jpeg", alt: "Floral Dark Blue" },
  { src: "../assets/5b.jpeg", alt: "Red Lotus" },
];

const DesignPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-[610px] bg-[#FFFCFC] flex justify-center items-center"
        style={{ overflow: "hidden" }}
      >
        {/* Ellipse 1 */}
        <div className="absolute w-[984px] h-[923px] left-[-280px] top-[-358px] bg-gradient-to-r from-[#FFF2F2] to-[#FFFFFF] rounded-full"></div>

        {/* Ellipse 2 */}
        <div className="absolute w-[570px] h-[533px] left-[-118px] top-[-179px] bg-gradient-to-r from-[#FFCECE] to-[#FFFFFF] rounded-full"></div>

        {/* Text Content 1 */}
        <div className="relative text-center z-10 mt-12">
          <h2 className="text-4xl font-montserrat text-black mb-6">
            Wedding Invitation Presets
          </h2>
          <p className="text-lg text-black mb-6 mx-6">
            With these presets, <br />
            you can choose a theme
            <span className="text-[#C66B6B]"> that suits your preference</span>
          </p>
        </div>

        {/* Text Content 2 */}
        <div className="absolute top-[400px] w-full flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold font-montserrat text-black mb-6">
            See What’s Popular
          </h3>
          <p className="text-lg text-black mb-6">
            MAKE YOUR WEDDING INVITATIONS <br />
            <span className="text-[#C66B6B]">
              UNFORGETTABLE FOR YOUR MEMORIES
            </span>
          </p>
          <div className="flex justify-center space-x-12">
            <button
              className="w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-xl font-normal"
              onClick={() => handleNavigate("/semua")}
            >
              Semua
            </button>
            <button
              className="w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-xl font-normal"
              onClick={() => handleNavigate("/basic")}
            >
              Basic
            </button>
            <button
              className="w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-xl font-normal"
              onClick={() => handleNavigate("/premium")}
            >
              Premium
            </button>
            <button
              className="w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-xl font-normal"
              onClick={() => handleNavigate("/eksklusif")}
            >
              VIP
            </button>
            
          </div>
        </div>
      </section>

      {/* Section Design Eksklusif */}
      <section>
        <div className="relative w-full py-12 bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF] flex justify-center items-center" style={{ overflow: "hidden" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
            {imagesEksklusif.map((image, index) => (
              <div key={index} className="border border-yellow-600 rounded-md flex flex-col justify-between items-center p-4 relative group">
                <div className="w-full flex justify-center">
                  <img src={image.src} alt={image.alt} className="w-4/5 transition-opacity duration-300 group-hover:opacity-50" />
                </div>
                <div className="text-gray-800 text-lg font-medium text-center flex flex-col gap-4 mt-4">
                  <div>{image.alt}</div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-pink-100 bg-opacity-70 text-black text-xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-80 cursor-pointer"
                 onClick={() => handleNavigate(`/design/design3`)}>
                  VIP
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Design Premium */}
      <section>
        <div className="relative w-full py-12 bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF] flex justify-center items-center" style={{ overflow: "hidden" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
            {imagesPremium.map((image, index) => (
              <div key={index} className="border border-purple-600 rounded-md flex flex-col justify-between items-center p-4 relative group">
                <div className="w-full flex justify-center">
                  <img src={image.src} alt={image.alt} className="w-4/5 transition-opacity duration-300 group-hover:opacity-50" />
                </div>
                <div className="text-gray-800 text-lg font-medium text-center flex flex-col gap-4 mt-4">
                  <div>{image.alt}</div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-pink-100 bg-opacity-70 text-black text-xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-80 cursor-pointer"
                onClick={() => handleNavigate(`/design/design2`)}>
                  Premium
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Design Basic */}
      <section>
        <div className="relative w-full py-12 bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF] flex justify-center items-center" style={{ overflow: "hidden" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
            {imagesBasic.map((image, index) => (
              <div key={index} className="border border-grey-600 rounded-md flex flex-col justify-between items-center p-4 relative group">
                <div className="w-full flex justify-center">
                  <img src={image.src} alt={image.alt} className="w-4/5 transition-opacity duration-300 group-hover:opacity-50" />
                </div>
                <div className="text-gray-800 text-lg font-medium text-center flex flex-col gap-4 mt-4">
                  <div>{image.alt}</div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-pink-100 bg-opacity-70 text-black text-xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-80 cursor-pointer" 
                // onClick={() => handleNavigate(`/basic/${index}`)}>
                onClick={() => handleNavigate(`/design/design1`)}>
                  Basic
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignPage;
