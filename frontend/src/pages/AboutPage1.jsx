// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import mainBanner from '../assets/img/main-banner.gif';
import icon1 from '../assets/img/icon1.jpg/';
import icon2 from '../assets/img/icon2.jpg';
import icon3 from '../assets/img/icon3.jpg';
import team1 from '../assets/img/rezky.png';
import team2 from '../assets/img/rey.jpeg';
import team3 from '../assets/img/rissa.jpg';
import team4 from '../assets/img/yardan.jpg';
import team5 from '../assets/img/mahmud.png';
import team6 from '../assets/img/tirta.jpg';


function AboutPage() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto bg-white">
      <section className="relative w-full min-h-[610px] bg-[#FFFCFC] flex justify-center items-center" style={{ overflow: 'hidden' }}>
        {/* Ellipse 1 */}
        <div className="absolute w-[984px] h-[923px] left-[-280px] top-[-358px] bg-gradient-to-r from-[#FFF2F2] to-[#FFFFFF] rounded-full"></div>
        
        {/* Ellipse 2 */}
        <div className="absolute w-[570px] h-[533px] left-[-118px] top-[-179px] bg-gradient-to-r from-[#FFCECE] to-[#FFFFFF] rounded-full"></div>

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
              <img src={mainBanner} alt="Gambar Anda" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative w-full py-12 bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF] flex">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Talk About ...</h3>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon1} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg mb-2">Undangan Pernikahan Kustom</h4>
                <span className="italic text-sm text-gray-600">
                  Setiap pasangan memiliki cerita unik mereka sendiri, dan kami percaya undangan pernikahan Anda harus mencerminkan keunikan itu. Kami menawarkan layanan desain kustom yang memungkinkan Anda memilih setiap detail, mulai dari gaya dan warna hingga font dan ilustrasi, untuk memastikan undangan Anda benar-benar mencerminkan kepribadian dan gaya Anda.
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon2} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg mb-2">Misi Dan Tujuan</h4>
                <span className="italic text-sm text-gray-600">
                  Kami berusaha untuk terus berinovasi dengan menawarkan solusi undangan digital yang ramah lingkungan. Undangan digital kami tidak hanya mengurangi jejak karbon tetapi juga menyediakan opsi yang modern dan interaktif bagi pasangan yang lebih memilih pendekatan digital.
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon3} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg mb-2">Kepuasan Pelanggan</h4>
                <span className="italic text-sm text-gray-600">
                  Tim kami selalu siap membantu Anda dalam setiap langkah proses pembuatan undangan. Dari konsultasi desain awal hingga pengiriman akhir, kami di sini untuk memastikan pengalaman Anda dengan kami adalah yang terbaik.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="team" className="relative w-full py-12 bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF] flex">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Meet Our Team</h3>
          </div>
          <div className="flex flex-wrap justify-center">
            {[
              {
                src: team1,
                alt: "Muh Rezky Pasuloi",
                name: "Muh Rezky Pasuloi",
                role: "Front-End Developer",
              },
              {
                src: team2,
                alt: "Reynaldi Putra Hasli",
                name: "Reynaldi Putra Hasli",
                role: "Front-End Developer",
              },
              {
                src: team3,
                alt: "Rissa Rizkika",
                name: "Rissa Rizkika",
                role: "Front-End Developer",
              },
              {
                src: team4,
                alt: "Yardan Safir",
                name: "Yardan Safir",
                role: "Back-End Developer",
              },
              {
                src: team5,
                alt: "Mahmud Basyarahil",
                name: "Mahmud Basyarahil",
                role: "Back-End Developer",
              },
              {
                src: team6,
                alt: "Tirta Subagja",
                name: "Tirta Subagja",
                role: "Back-End Developer",
              },
            ].map((member, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg flex flex-col h-full">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img
                    src={member.src}
                    alt={member.alt}
                    className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-110"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                <span className="italic text-sm text-gray-600 mb-4">{member.role}</span>
                <div className="social mt-auto">
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;

