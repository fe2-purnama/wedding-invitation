import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import mainBanner from '../assets/img/main-banner.gif';
import icon1 from '../assets/img/icon1.jpg/';
import icon2 from '../assets/img/icon2.jpg';
import icon3 from '../assets/img/icon3.jpg';
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';

function AboutPage() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto bg-white px-4 md:px-6 lg:px-8 xl:px-10">
      <section className="relative w-full h-auto bg-[#FFFCFC] flex justify-center items-center py-16 md:py-24" style={{ overflow: 'hidden' }}>
        {/* Ellipse 1 */}
        <div className="absolute w-[984px] h-[923px] left-[-280px] top-[-358px] bg-gradient-to-r from-[#FFF2F2] to-[#FFFFFF] rounded-full"></div>

        {/* Ellipse 2 */}
        <div className="absolute w-[570px] h-[533px] left-[-118px] top-[-179px] bg-gradient-to-r from-[#FFCECE] to-[#FFFFFF] rounded-full"></div>

        {/* Text Content 1 */}
        <div className="relative w-full flex flex-col items-center text-center px-4">
          <h2 className="text-5xl font-semibold font-sans text-gray-800 mb-6">About Us</h2>
          <div className="container mx-auto mt-5 flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <h3 className="text-4xl font-semibold font-sans text-gray-800 mb-4">Our Story</h3>
              <p className="text-lg text-gray-700">
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
              <div className="member text-center bg-white shadow-lg rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon1} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg">Undangan Pernikahan Kustom</h4>
                <span className="italic text-sm text-gray-600">
                  Setiap pasangan memiliki cerita unik mereka sendiri, dan kami percaya undangan pernikahan Anda harus mencerminkan keunikan itu. Kami menawarkan layanan desain kustom yang memungkinkan Anda memilih setiap detail, mulai dari gaya dan warna hingga font dan ilustrasi, untuk memastikan undangan Anda benar-benar mencerminkan kepribadian dan gaya Anda.
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon2} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg">Misi Dan Tujuan</h4>
                <span className="italic text-sm text-gray-600">
                  Kami berusaha untuk terus berinovasi dengan menawarkan solusi undangan digital yang ramah lingkungan. Undangan digital kami tidak hanya mengurangi jejak karbon tetapi juga menyediakan opsi yang modern dan interaktif bagi pasangan yang lebih memilih pendekatan digital.
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64 flex justify-center items-center">
                  <img src={icon3} alt="Check Icon" className="w-auto h-full object-contain" />
                </div>
                <h4 className="font-bold text-lg">Kepuasan Pelanggan</h4>
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
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64">
                  <img src={team1} alt="Muh Rezky Pasuloi" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg">Muh Rezky Pasuloi</h4>
                <span className="italic text-sm text-gray-600">Front-End Developer</span>
                <div className="social mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64">
                  <img src={team2} alt="Reynaldi Putra Hasli" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg">Reynaldi Putra Hasli</h4>
                <span className="italic text-sm text-gray-600">Front-End Developer</span>
                <div className="social mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64">
                  <img src={team3} alt="Rissa Rizkika" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg">Rissa Rizkika</h4>
                <span className="italic text-sm text-gray-600">Front-End Developer</span>
                <div className="social mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64">
                  <img src={team4} alt="Yardan Safir" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg">Yardan Safir</h4>
                <span className="italic text-sm text-gray-600">Back-End Developer</span>
                <div className="social mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64">
                  <img src={team1} alt="Mahmud" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg">Mahmud</h4>
                <span className="italic text-sm text-gray-600">Back-End Developer</span>
                <div className="social mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 mx-2"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="member text-center bg-white shadow-lg p-6 rounded-lg">
                <div className="pic mb-4 overflow-hidden h-64">
                  <img src={team2} alt="Tirta Subagja" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg">Tirta Subagja</h4>
                <span className="italic text-sm text-gray-600">Back-End Developer</span>
                <div className="social mt-4">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
