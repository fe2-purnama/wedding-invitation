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
import styled from 'styled-components';

const HomePage = () => {
  const handleGamelabClick = () => {
    window.location.href = 'https://gamelab.id';
  };

const HomeContainer = styled.div`
background-color: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.color};
position: relative;
transition: background-color 0.5s ease;

  h2 {
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }

  h1{
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }

  p{
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  z-index: 1;
  background-size: cover;
  margin-bottom: 1.5rem;

@media (min-width: 1024px) {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 20px;
}
`;

const Section = styled.section`
  background: ${({ theme }) => theme.backgroundGradient};
  padding: 2rem 0;
  transition: background-color 0.5s ease;

  h2 {
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }

  h1{
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }

  p{
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }

  li{
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: background-color 0.5s ease;
`;

const Circle = styled.div`
    position: absolute;
    background: ${({ theme }) => theme.gradient};
    transition: background-color 0.3s ease;
    z-index: -1;
`;

  return (
    <section>
      {/* Hero section */}
      <HomeContainer className="relative w-full h-[610px] justify-center items-center flex flex-col" style={{ overflow: 'hidden' }}>
        {/* circle pattern */}
        <Circle className="lg:w-[984px] lg:h-[923px] w-[823px] h-[794px] -left-[280px] -top-[358px] rounded-[50%]"></Circle>
        {/* circle pattern */}
        <Circle className="lg:w-[570px] lg:h-[533px] w-[430px] h-[424px] -left-[118px] -top-[179px] rounded-[50%]"></Circle>
        <BannerImage src={Banner} alt="banner" />
        <section className="lg:absolute lg:text-left lg:left-[92px] lg:top-[182px] text-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2">#1 Wedding Invitation App</h1>
          <h2 className="text-xl lg:text-2xl italic mb-0 text-start">Solusi Mudah Pada Hari Berbahagia</h2>
          <p className="lg:text-2xl text-xl mb-6">Bagikan Momen Bahagiamu dengan <br />Lebih <span className="text-[#C66B6B]">Modern</span></p>
          <button className="w-full lg:w-[240px] h-[40px] lg:h-[60px] bg-[#C66B6B] rounded-[20px] text-white text-lg lg:text-xl font-normal flex items-center justify-center mb-10" onClick={handleGamelabClick}>
            Make Your Invitation
          </button>
        </section>
      </HomeContainer>
      
      {/* Features section */}
      <section>
        <Section className="relative w-full h-auto flex flex-col">
          <h2 className="font-montserrat font-bold text-[36px] leading-[44px] items-center justify-center mt-12 ">
            Our Features
          </h2>
          
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-10">
              <div className="card flex justify-center">
                <Card>
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
              <div className="card flex justify-center">
                <Card >
                  <h3 className="font-montserrat font-semibold text-[24px] text-center">Lebih Elegan</h3>
                  <p className="font-montserrat font-normal text-[16px] text-center text-black">Undangan berbentuk digital terkesan lebih mewah</p>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <section className="relative">
        <Section className="w-full h-auto flex flex-col items-center">
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
              <div className="mt-4 ml-0 lg:ml-10 lg:w-[560px] lg:h-[315px] ">
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
        </Section>
      </section>

      {/* portfolio section */}
      <Section className="relative w-full h-auto flex ">
        <div className="lg:w-1/2 lg:flex  lg:justify-center">
          <img src={bg} alt="section kiri" className="lg:w-full lg:h-[100%] object-cover lg:bg-gradient-to-l from-transparent to-bg-white" />
          {/* <div className="lg:absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-80 lg:w-[50%]"></div> */}

        </div>
        
        {/* Right Section with Portfolio */}
        <div className="lg:w-1/2 w-full p-10">
          <h2 className="text-[40px] font-istok-web font-bold text-center mb-8">
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
      </Section>

      {/* design section */}
      <section>
        <Section className="relative w-full h-auto lg:h-[1192px] flex flex-col items-center">
          
          <div className="w-[254px] h-[69px] mt-10 text-center font-istok-web font-bold text-4xl leading-[69px]">
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
          
        </Section>
      </section>

      {/* offering section */}
      <section className="relative flex justify-center ">
        <Section className="w-ful lg:px-4">
          <h2 className="w-full text-center font-istok-web font-bold text-4xl pt-10">PENAWARAN KAMI</h2>
              
          {/* card */}
          <div className="lg:flex justify-center lg:gap-10 my-16 px-10 ">
            <Card className="lg:w-[400px] lg:h-[542px] bg-white shadow-lg rounded-lg flex flex-col mb-5 pb-5">
              <div className="h-[87px] bg-[#92B0FF] flex items-center rounded-t-lg justify-center">
                <p className="text-center font-istok-web font-bold text-3xl text-black">Basic</p>
              </div>
              <p className="text-center font-montserrat font-semibold text-2xl my-5">Rp. 99.000</p>
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
            </Card>
            <Card className="lg:w-[400px] lg:h-[542px] bg-white shadow-lg  rounded-lg flex flex-col mb-5 pb-5">
              <div className="h-[87px] bg-[#F4D2D2] flex items-center rounded-t-lg justify-center">
                <p className="text-center font-istok-web font-bold text-3xl text-black">Premium</p>
              </div>
              <p className="text-center font-montserrat font-semibold text-2xl my-5">Rp. 149.000</p>
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
            </Card>
            <Card className="lg:w-[400px] lg:h-[542px] bg-white shadow-lg rounded-lg flex flex-col mb-5 pb-5">
              <div className="h-[87px] bg-[#FFC700] flex items-center rounded-t-lg justify-center">
                <p className="text-center font-istok-web font-bold text-3xl text-black">VIP</p>
              </div>
              <p className="text-center font-montserrat font-semibold text-2xl my-5">Rp. 299.000</p>
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
            </Card>
          </div>
        </Section>
      </section>

      {/* footer section */}
      <Footer />

    </section>
    
    
  );
};

export default HomePage;
