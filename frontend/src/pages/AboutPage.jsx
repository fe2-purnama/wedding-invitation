/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
import mainBanner from '../assets/img/main-banner.gif';
import icon1 from '../assets/img/icon1.jpg';
import icon2 from '../assets/img/icon2.jpg';
import icon3 from '../assets/img/icon3.jpg';
import team1 from '../assets/img/rezky.png';
import team2 from '../assets/img/rey.jpeg';
import team3 from '../assets/img/rissa.jpg';
import team4 from '../assets/img/yardan.jpg';
import team5 from '../assets/img/mahmud.png';
import team6 from '../assets/img/tirta.jpg';

const TeamSection = styled.section`
  position: relative;
  width: 100%;
  padding: 3rem 0;
  background: linear-gradient(to bottom right, #fff2f2, #ffffff);
  display: flex;
  
  //darkmode
  background: ${({ theme }) => theme.TeamSection};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease;
`;

const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Title = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MemberCard = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 1rem;

  @media (min-width: 640px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 33.3333%;
  }
  padding: 1rem;
`;

const Member = styled.div`
  text-align: center;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding-top: 4rem;

background: ${({ theme }) => theme.cardBackground};
color: ${({ theme }) => theme.cardColor};
transition: background-color 0.5s ease;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

const PicContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    border-radius: 5%;
    width: 100%;
    height: auto;
    box-shadow: none;
  }
`;

const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const MemberName = styled.h4`
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.span`
  font-style: italic;
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  margin-top: auto;
  a {
    color: #cbd5e0;
    margin: 0 0.5rem;
    &:hover {
      color: #4299e1;
    }
    &.instagram:hover {
      color: #ed64a6;
    }
    &.linkedin:hover {
      color: #2b6cb0;
    }
    &.github:hover {
      color: #393b3d;
    }
  }
`;

//darkmode
const Circle1 = styled.div`
    background: ${({ theme }) => theme.designGradient};
    position: absolute;
    transition: background-color 0.5s ease;

  `;

const Circle2 = styled.div`
  background: ${({ theme }) => theme.designGradient2};
  position: absolute;
  transition: background-color 0.5s ease;

`;

const HomeAboutSection = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  position: relative;
  transition: background-color 0.5s ease;

h2 {
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease;
}

h1{
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease;
}

p{
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease;
}

h3{
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease;
}

h5{
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease;
}
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  transition: background-color 0.5s ease;

    h4, span, h1, h2, p{
      color: ${({ theme }) => theme.cardColor};
    }
`;
function AboutPage() {
  return (
    <HomeAboutSection className="relative w-full max-w-full mx-0">
      <HomeAboutSection className="relative w-full min-h-[610px] flex justify-center items-center" style={{ overflow: 'hidden' }}>
        {/* Ellipse 1 */}
        <Circle1 className=" w-[984px] h-[923px] left-[-280px] top-[-358px] rounded-full"></Circle1>

        {/* Ellipse 2 */}
        <Circle2 className=" w-[570px] h-[533px] left-[-118px] top-[-179px] rounded-full"></Circle2>

        {/* Text Content 1 */}
        <div className="absolute top-28 w-full flex flex-col items-center text-center px-4">
          <h3 className="text-3xl sm:text-5xl font-semibold font-montserrat text-black mb-4 sm:mb-6">About Us</h3>
          <div className="container mx-auto mt-5 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <h5 className="text-2xl md:text-4xl font-semibold font-sans text-gray-800 mb-4">Our Story</h5>
              <p className="text-base md:text-lg text-gray-700">
                Selamat datang di Wedding Invitation App, di mana setiap undangan adalah karya seni yang dibuat dengan cinta dan perhatian. Kami adalah penyedia undangan pernikahan terkemuka yang berkomitmen untuk membantu pasangan menciptakan undangan pernikahan yang sempurna dan tak terlupakan.
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img src={mainBanner} alt="Gambar Anda" className="w-full h- rounded-lg shadow-lg object-cover" style={{ maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </HomeAboutSection>

      <HomeAboutSection id="about" className="relative w-full py-12 flex" style={{ marginTop: '50px' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Talk About ...</h3>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <Card className="member text-center bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon1} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg mb-2">Undangan Pernikahan Kustom</h4>
                <span className="italic text-sm text-gray-600">
                  Setiap pasangan memiliki cerita unik mereka sendiri, dan kami percaya undangan pernikahan Anda harus mencerminkan keunikan itu. Kami menawarkan layanan desain kustom yang memungkinkan Anda memilih setiap detail, mulai dari gaya dan warna hingga font dan ilustrasi, untuk memastikan undangan Anda benar-benar mencerminkan kepribadian dan gaya Anda.
                </span>
              </Card>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <Card className="member text-center bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon2} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg mb-2">Misi Dan Tujuan</h4>
                <span className="italic text-sm text-gray-600">
                  Kami berusaha untuk terus berinovasi dengan menawarkan solusi undangan digital yang ramah lingkungan. Undangan digital kami tidak hanya mengurangi jejak karbon tetapi juga menyediakan opsi yang modern dan interaktif bagi pasangan yang lebih memilih pendekatan digital.
                </span>
              </Card>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <Card className="member text-center bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon3} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg mb-2">Kepuasan Pelanggan</h4>
                <span className="italic text-sm text-gray-600">
                  Tim kami selalu siap membantu Anda dalam setiap langkah proses pembuatan undangan. Dari konsultasi desain awal hingga pengiriman akhir, kami di sini untuk memastikan pengalaman Anda dengan kami adalah yang terbaik.
                </span>
              </Card>
            </div>
          </div>
        </div>
      </HomeAboutSection>

      <TeamSection id="team">
        <Container>
          <Title>Meet Our Team</Title>
          <FlexWrap>
            {[
              {
                src: team1,
                alt: "Muh Rezky Pasuloi",
                name: "Muh Rezky Pasuloi",
                role: "Front-End Developer",
                social:{
                  twitter: "https://twitter.com/",
                  facebook: "https://facebook.com/",
                  github: "https://github.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/",
                }
              },
              {
                src: team2,
                alt: "Reynaldi Putra Hasli",
                name: "Reynaldi Putra Hasli",
                role: "Front-End Developer",
                social:{
                  twitter: "https://twitter.com/",
                  facebook: "https://facebook.com/",
                  github: "https://github.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/",
                }
              },
              {
                src: team3,
                alt: "Rissa Rizkika",
                name: "Rissa Rizkika",
                role: "Front-End Developer",
                social:{
                  twitter: "https://twitter.com/",
                  facebook: "https://facebook.com/",
                  github: "https://github.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/",
                }
              },
              {
                src: team4,
                alt: "Yardan Safir",
                name: "Yardan Safir",
                role: "Back-End Developer",
                social:{
                  twitter: "https://twitter.com/",
                  facebook: "https://facebook.com/",
                  github: "https://github.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/",
                }
              },
              {
                src: team5,
                alt: "Mahmud Basyarahil",
                name: "Mahmud Basyarahil",
                role: "Back-End Developer",
                social:{
                  twitter: "https://twitter.com/",
                  facebook: "https://facebook.com/",
                  github: "https://github.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/",
                }
              },
              {
                src: team6,
                alt: "Tirta Subagja",
                name: "Tirta Subagja",
                role: "Back-End Developer",
                social:{
                  twitter: "https://twitter.com/",
                  facebook: "https://facebook.com/",
                  github: "https://github.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/in/",
                }
              },
            ].map((member, index) => (
              <MemberCard key={index}>
                <Member>
                  <PicContainer>
                    <MemberImg src={member.src} alt={member.alt} />
                  </PicContainer>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                  <SocialLinks>
                    <a href={member.social.twitter} className="bi bi-twitter"></a>
                    <a href={member.social.facebook} className="bi bi-facebook"></a>
                    <a href={member.social.github} className="bi bi-github github"></a>
                    <a href={member.social.instagram} className="bi bi-instagram instagram"></a>
                    <a href={member.social.linkedin} className="bi bi-linkedin linkedin"></a>
                  </SocialLinks>
                </Member>
              </MemberCard>
            ))}
          </FlexWrap>
        </Container>
      </TeamSection>
    </HomeAboutSection>
  );
}

export default AboutPage;
