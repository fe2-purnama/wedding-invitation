/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from "../assets/herobanner.gif"
import port1 from "../assets/port1.jpeg"
import des1 from "../assets/des1.jpeg"
import des2 from "../assets/des2.jpg"
import des3 from "../assets/des3.png"
import des4 from "../assets/des4.jpg"
import bg from "../assets/lll.jpg"
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {
  const handleGamelabClick = () => {
    window.location.href = 'https://gamelab.id';
  };

  return (
    <section>
      {/* <section className="relative w-full h-[610px] bg-[#FFFCFC] flex justify-center items-center " style={{ overflow: 'hidden' }}>
        <div className="absolute w-[984px] h-[923px] -left-[280px] -top-[358px] bg-gradient-to-r from-[#FFF2F2] to-[#FFFFFF] rounded-full"></div>
        <div className="absolute w-[570px] h-[533px] -left-[118px] -top-[179px] bg-gradient-to-r from-[#FFCECE] to-[#FFFFFF] rounded-full"></div>
        <img src={Banner} alt="banner" className="absolute w-[584px] h-[590px] right-0 top-[20px] bg-cover" />
        <div className="absolute left-[92px] top-[182px]">
          <h1 className="text-4xl font-bold text-black mb-2 ">#1 Wedding Invitation App</h1>
          <h2 className="text-2xl italic text-black mb-6 ">Solusi Mudah Pada Hari Berbahagia</h2>
          <p className="text-lg text-black mb-6 ">Bagikan Momen Bahagiamu dengan <br />Lebih <span className="text-[#C66B6B]">Modern</span></p>
          <button className="w-[240px] h-[60px] bg-[#C66B6B] rounded-[20px] text-white text-xl font-normal flex items-center justify-center " onClick={handleGamelabClick}>
            Make Your Invitation
          </button>
        </div>
      </section> */}

      {/* update sementara */}
      {/* Hero section */}
      <section className="relative w-full h-[610px] bg-[#FFFCFC] flex justify-center items-center flex flex-col" style={{ overflow: 'hidden' }}>
        {/* circle pattern */}
        <div className="lg:absolute lg:w-[984px] lg:h-[923px] w-[823px] h-[794px] -left-[280px]  -top-[358px] bg-gradient-to-r from-[#FFF2F2] to-[#FFFFFF] rounded-[50%]"></div>
        {/* circle pattern */}
        <div className="lg:absolute lg:w-[570px] lg:h-[533px] w-[430px] h-[424px] -left-[118px] -top-[179px] bg-gradient-to-r from-[#FFCECE] to-[#FFFFFF] rounded-[50%]"></div>
        <img src={Banner} alt="banner" className="w-full max-w-[500px] h-auto bg-cover mb-6 lg:absolute lg:w-[100%] lg:h-[100%] lg:right-0 lg:top-[20px]" />
        <div className="lg:absolute lg:text-left lg:left-[92px] lg:top-[182px] text-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-black mb-2">#1 Wedding Invitation App</h1>
          <h2 className="text-xl lg:text-2xl italic text-black mb-0 text-start">Solusi Mudah Pada Hari Berbahagia</h2>
          <p className="lg:text-2xl text-xl text-black mb-6">Bagikan Momen Bahagiamu dengan <br />Lebih <span className="text-[#C66B6B]">Modern</span></p>
          <button className="w-full lg:w-[240px] h-[40px] lg:h-[60px] bg-[#C66B6B] rounded-[20px] text-white text-lg lg:text-xl font-normal flex items-center justify-center mb-10" onClick={handleGamelabClick}>
            Make Your Invitation
          </button>
        </div>
      </section>
      
      {/* Features section */}
      <section>
        <div className="relative w-full h-auto bg-gradient-to-b from-white to-[#E9B2B2]  flex flex-col">
          <h2 className="font-montserrat font-bold text-[36px] leading-[44px] text-black items-center justify-center mt-12 ">
            Our Features
          </h2>
          
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-10">
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
              <div className="card flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center">
                  <h3 className="font-montserrat font-semibold text-[24px] text-black text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="flex flex-grow items-center justify-center bg-gradient-to-b from-white to-[#E9B2B2] min-h-screen">
        <div className="relative w-full max-w-[1440px] px-8 py-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-black mb-10">
            Our Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-[355px] h-[100px] bg-white shadow-lg rounded-[10px] flex flex-col justify-center items-center">
                  <h3 className="font-montserrat font-semibold text-xl text-black text-center mb-2">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-sm text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* tutor section */}
      <section className="relative">
        <div className="w-full h-auto bg-gradient-to-br from-[#F3D1D1] to-[#A19B9B] flex flex-col items-center">
          <h2 className="w-full mt-8 font-montserrat font-bold text-3xl lg:text-4xl text-center text-black">
            Tutorial Membuat Undangan
          </h2>
          <div className="lg:flex w-full lg:mt-16 mt-5 text-start">
            <div className="lg:w-1/2 w-full lg:flex-col items-start lg:pl-10 lg:ml-10 px-10">
              <p className="font-montserrat italic font-normal text-xl lg:text-3xl mb-5  text-black">
                Cara membuat Undangan Kamu :
              </p>
              <ol className="mt-4 mb-10 font-montserrat font-normal text-xl lg:text-2xl text-black" style={{ listStyle: '1.' }}>
                <li className="mb-3">hsbdkbsdjnsjkdc</li>
                <li className="mb-3">kjbsdfcwibe</li>
                <li className="mb-3">sbdiovowbe</li>
                <li className="mb-3">hbkdcwd </li>
                <li className="mb-3">abiohicowie</li>
              </ol>
              
            </div>
            <div className="lg:w-1/2 w-full lg:flex-col mb-10 px-10">
              <p className="font-montserrat font-normal lg:text-xl text-xl lg:ml-20  text-black">
                Tonton Video Dibawah ini :
              </p>
              <div className="mt-4 ml-0 lg:ml-20 lg:w-[560px] lg:h-[315px] ">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Ar1qQpKbiVc?si=B4W3npc60DslnTcC"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio section */}
      <section className="relative w-full h-auto flex bg-gradient-to-br from-[#F4D2D2] via-[#EEEEEE] to-[#EEEEEE]">
        <div className="lg:w-1/2 lg:flex  lg:justify-center">
          <img src={bg} alt="section kiri" className="lg:w-full lg:h-[100%] object-cover lg:bg-gradient-to-l from-transparent to-bg-white" />
          {/* <div className="lg:absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-80 lg:w-[50%]"></div> */}

        </div>
        
        {/* Right Section with Portfolio */}
        <div className="lg:w-1/2 w-full p-10">
          <h2 className="text-[40px] font-istok-web font-bold text-center text-black mb-8">
            Our Portfolio
          </h2>
          
          {/* gambar Portfolio*/}
          <div className="grid grid-cols-3 gap-4">
            <img src={port1} className="w-[200px] h-[230px] rounded-[10px]" />
            <img src={port1} className="w-[200px] h-[230px] rounded-[10px]" />
            <img src={port1} className="w-[200px] h-[230px] rounded-[10px]" />
            <img src={port1} className="w-[200px] h-[230px] rounded-[10px]" />
            <img src={port1} className="w-[200px] h-[230px] rounded-[10px]" />
            <img src={port1} className="w-[200px] h-[230px] rounded-[10px]" />
          </div>
          <div className="mt-8">
            <button className="lg:w-[368px] w-[340px] h-[50px] lg:h-[54px] bg-[#C66B6B] rounded-[10px] text-2xl text-white">
            <Link to="/review">Click for more portfolio</Link>
            </button>
          </div>
        </div>
      </section>

      {/* design section */}
      <section>
        <div className="relative w-full h-auto lg:h-[1192px] bg-gradient-to-b from-[#EEEEEE] to-[#FFFFFF] flex flex-col items-center">
          
          <div className="w-[254px] h-[69px] mt-10 text-center font-istok-web font-bold text-4xl leading-[69px] text-black">
            Our Design
          </div>
          
          <div className=" lg:grid lg:grid-cols-2 lg:gap-20 m-10">
            <img src={des1} alt="design1" className="mb-5 w-[600px] h-[400px] rounded-[10px]" />
            <img src={des2} alt="design2" className="mb-5 w-[600px] h-[400px] rounded-[10px]" />
            <img src={des3} alt="design3" className="mb-5 w-[600px] h-[400px] rounded-[10px]" />
            <img src={des4} alt="design4" className=" w-[600px] h-[400px] rounded-[10px]" />
          </div>
          
          <div className="lg:w-[270px] w-[340px] mx-10 h-[50px] lg:h-[50px]  bg-[#C66B6B] rounded-[10px] mb-10 flex items-center justify-center">
            <div className="font-istok-web font-normal  text-2xl  text-white">
            <Link to="/design">Click For More</Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* offering section */}
      <section className="relative flex justify-center ">
        <div className="w-full bg-gradient-to-b from-white to-[#868484] lg:px-4">
          <h2 className="w-full text-center font-istok-web font-bold text-4xl text-black pt-10">PENAWARAN KAMI</h2>
              
          {/* card */}
          <div className="lg:flex justify-center lg:gap-10 my-16 px-10 ">
            <div className="lg:w-[400px] lg:h-[542px] bg-white shadow-lg rounded-lg flex flex-col mb-5 pb-5">
              <div className="h-[87px] bg-[#92B0FF] flex items-center rounded-t-lg justify-center">
                <p className="text-center font-istok-web font-bold text-3xl text-black">Basic</p>
              </div>
              <p className="text-center font-montserrat font-semibold text-2xl text-black my-5">Rp. 99.000</p>
              <ul className="text-center font-montserrat font-normal text-lg text-black" style={{ listStyle: "-" }}>
                <li>nalihdfiwed</li>
                <li>kamlmfld</li>
                <li>kamas;smwjfoeld</li>
                <li>sbdkbwkjfc</li>
                <li>jbajugouws</li>
                <li>jnjhdiwohvf</li>
                <li>jnoihdvc</li>
                <li>bsdibv</li>
                <li>jsbdoivbw</li>
                <li> ajhifv</li>
              </ul>
            </div>
            <div className="lg:w-[400px] lg:h-[542px] bg-white shadow-lg  rounded-lg flex flex-col mb-5 pb-5">
              <div className="h-[87px] bg-[#F4D2D2] flex items-center rounded-t-lg justify-center">
                <p className="text-center font-istok-web font-bold text-3xl text-black">Premium</p>
              </div>
              <p className="text-center font-montserrat font-semibold text-2xl text-black my-5">Rp. 149.000</p>
              <ul className="text-center font-montserrat font-normal text-lg text-black" style={{ listStyle: "-" }}>
                <li>nalihdfiwed</li>
                <li>kamlmfld</li>
                <li>kamas;smwjfoeld</li>
                <li>sbdkbwkjfc</li>
                <li>jbajugouws</li>
                <li>jnjhdiwohvf</li>
                <li>jnoihdvc</li>
                <li>bsdibv</li>
                <li>jsbdoivbw</li>
                <li> ajhifv</li>
              </ul>
            </div>
            <div className="lg:w-[400px] lg:h-[542px] bg-white shadow-lg rounded-lg flex flex-col mb-5 pb-5">
              <div className="h-[87px] bg-[#FFC700] flex items-center rounded-t-lg justify-center">
                <p className="text-center font-istok-web font-bold text-3xl text-black">VIP</p>
              </div>
              <p className="text-center font-montserrat font-semibold text-2xl text-black my-5">Rp. 299.000</p>
              <ul className="text-center font-montserrat font-normal text-lg text-black" style={{ listStyle: "-" }}>
                <li>nalihdfiwed</li>
                <li>kamlmfld</li>
                <li>kamas;smwjfoeld</li>
                <li>sbdkbwkjfc</li>
                <li>jbajugouws</li>
                <li>jnjhdiwohvf</li>
                <li>jnoihdvc</li>
                <li>bsdibv</li>
                <li>jsbdoivbw</li>
                <li> ajhifv</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer />

    </section>
    
    
  );
};

export default HomePage;
