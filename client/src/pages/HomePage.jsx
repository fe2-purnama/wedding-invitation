import React from 'react';
import Banner from "../assets/herobanner.gif"
import port1 from "../assets/port1.jpeg"
import des1 from "../assets/des1.jpeg"
import des2 from "../assets/des2.jpg"
import des3 from "../assets/des3.png"
import des4 from "../assets/des4.jpg"

const HomePage = () => {
  const handleGamelabClick = () => {
    window.location.href = 'https://gamelab.id';
  };

  return (
    <section>
      <section className="relative w-full h-[610px] bg-[#FFFCFC] flex justify-center items-center " style={{ overflow: 'hidden' }}>
        <div className="absolute w-[984px] h-[923px] -left-[280px] -top-[358px] bg-gradient-to-r from-[#FFF2F2] to-[#FFFFFF] rounded-full"></div>
        <div className="absolute w-[570px] h-[533px] -left-[118px] -top-[179px] bg-gradient-to-r from-[#FFCECE] to-[#FFFFFF] rounded-full"></div>
        <img src={Banner} alt="banner" className="absolute w-[584px] h-[590px] right-0 top-[20px] bg-cover" />
        <div className="absolute left-[92px] top-[182px]">
          <h1 className="text-4xl font-bold text-black mb-2">#1 Wedding Invitation App</h1>
          <h2 className="text-2xl italic text-black mb-6">Solusi Mudah Pada Hari Berbahagia</h2>
          <p className="text-lg text-black mb-6">Bagikan Momen Bahagiamu dengan <br />Lebih <span className="text-[#C66B6B]">Modern</span></p>
          <button className="w-[240px] h-[60px] bg-[#C66B6B] rounded-[20px] text-white text-xl font-normal flex items-center justify-center" onClick={handleGamelabClick}>
            Make Your Invitation
          </button>
        </div>
      </section>
      <section>
        <div className="relative w-full h-[610px] bg-gradient-to-b from-white to-[#E9B2B2]  flex flex-col">
          <h2 className="font-montserrat font-bold text-[36px] leading-[44px] text-black flex items-center justify-center mt-12 mb-5">
            Our Features
          </h2>
          
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
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
      <section className="relative">
        <div className="w-full h-542 bg-gradient-to-br from-[#F3D1D1] to-[#A19B9B] flex flex-col items-center">
          <h2 className="w-full mt-8 font-montserrat font-bold text-3xl text-center text-black">
            Tutorial Membuat Undangan
          </h2>
          <div className="flex w-full mt-16">
            <div className="w-1/2 flex flex-col items-start pl-10 ml-10">
              <p className="font-montserrat italic font-normal text-3xl mb-5 text-center text-black">
                Cara membuat Undangan Kamu :
              </p>
              <ol className="mt-4 mb-10 font-montserrat font-normal text-2xl text-black" style={{ listStyle: '1.' }}>
                <li className="mb-3">hsbdkbsdjnsjkdc</li>
                <li className="mb-3">kjbsdfcwibe</li>
                <li className="mb-3">sbdiovowbe</li>
                <li className="mb-3">hbkdcwd </li>
                <li className="mb-3">abiohicowie</li>
              </ol>
              
            </div>
            <div className="w-1/2 flex flex-col  mb-10">
              <p className="font-montserrat font-normal text-xl ml-20 text-black">
                Tonton Video Dibawah ini :
              </p>
              <div className="mt-4 ml-20">
                <iframe
                  width="560"
                  height="315"
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
      <section className="relative w-full h-auto flex bg-gradient-to-br from-[#F4D2D2] via-[#EEEEEE] to-[#EEEEEE]">
        <div className="w-1/2 flex items-center justify-center">
          {/* <img src={port1} alt="section kiri" className="w-[614px] h-[631px] bg-[#D9D9D9]" /> */}
          <div className="w-[614px] h-[631px] bg-[#D9D9D9]"></div>
        </div>
        
        {/* Right Section with Portfolio */}
        <div className="w-1/2  p-10">
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
            <button className="w-[368px] h-[54px] bg-[#C66B6B] rounded-[10px] text-[20px] text-white">
              Click for more portfolio
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="relative w-full h-[1192px] bg-gradient-to-b from-[#EEEEEE] to-[#FFFFFF] flex flex-col items-center">
          
          <div className="w-[254px] h-[69px] mt-10 text-center font-istok-web font-bold text-4xl leading-[69px] text-black">
            Our Design
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-20">
            <img src={des1} alt="design1" className="w-[600px] h-[400px] rounded-[10px]" />
            <img src={des2} alt="design2" className="w-[600px] h-[400px] rounded-[10px]" />
            <img src={des3} alt="design3" className="w-[600px] h-[400px] rounded-[10px]" />
            <img src={des4} alt="design4" className="w-[600px] h-[400px] rounded-[10px]" />
          </div>
          
          <div className="w-[250px] h-[54px] mt-10 bg-[#C66B6B] rounded-[10px] flex items-center justify-center">
            <div className="font-istok-web font-normal text-[24px] leading-[35px] text-white">
              Click For More
            </div>
          </div>
          
        </div>
      </section>
      <section className="relative flex justify-center">
        <div className="w-full bg-gradient-to-b from-white to-[#868484] px-4">
          <h2 className="w-full text-center font-istok-web font-bold text-4xl text-black pt-10">PENAWARAN KAMI</h2>
              
          {/* card */}
          <div className="flex justify-center gap-10 my-16">
            <div className="w-[400px] h-[542px] bg-white shadow-lg rounded-lg flex flex-col">
              <div className="h-[87px] bg-[#92B0FF] flex items-center justify-center">
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
            <div className="w-[400px] h-[542px] bg-white shadow-lg rounded-lg flex flex-col">
              <div className="h-[87px] bg-[#F4D2D2] flex items-center justify-center">
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
            <div className="w-[400px] h-[542px] bg-white shadow-lg rounded-lg flex flex-col">
              <div className="h-[87px] bg-[#FFC700] flex items-center justify-center">
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
      <footer className="relative w-full bg-[#868484] px-4 py-12">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          <div className="w-[250px]">
            <p className="font-istok-web font-bold text-4xl text-white text-center mb-4">Links</p>
            <p className="font-montserrat font-normal text-base text-black text-center">Home</p>
            <p className="font-montserrat font-normal text-base text-black text-center">Product</p>
            <p className="font-montserrat font-normal text-base text-black text-center">About</p>
          </div>
          <div className="w-[250px]">
            <p className="font-istok-web font-bold text-4xl text-white text-center mb-4">Contact</p>
            <p className="font-montserrat font-normal text-base text-black text-center">email@gmail.com</p>
            <p className="font-montserrat font-normal text-base text-black text-center">Sleman, Yogyakarta</p>
            <p className="font-montserrat font-normal text-base text-black text-center">(62) 89525401248</p>
          </div>
          <div className="w-[500px]">
            <p className=" font-bold text-4xl text-white text-center mb-4">Follow us on social media</p>
            <p className="font-montserrat font-normal text-base text-black text-center">email@gmail.com</p>
            {/* icon sosmed */}
          </div>
        </div>
        <p className="font-istok-web font-normal text-2xl text-white text-center mt-8">Copyright &copy; alright reserved</p>
      </footer>

    </section>
    
    
  );
};

export default HomePage;
