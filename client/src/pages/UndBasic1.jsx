import React, { useState } from 'react';


// Import gambar
import HomeImage from '../assets/undanganBasic1/img/Home.png';
import DF2Image from '../assets/undanganBasic1/img/DF2.jpeg';
import AHImage from '../assets/undanganBasic1/img/AH.png';
import HoverImage from '../assets/undanganBasic1/img/hover.jpg';

import QuranImage from '../assets/undanganBasic1/img/Quran.png';
import IjabImage from '../assets/undanganBasic1/img/Ijab.jpg';
import TTDImage from '../assets/undanganBasic1/img/TTD.jpeg';
import ResepsiImage from '../assets/undanganBasic1/img/resepsi.jpg';
import FotoImage from '../assets/undanganBasic1/img/Foto.jpeg';

import GalleryImage1 from '../assets/undanganBasic1/img/14.jpeg';
import GalleryImage2 from '../assets/undanganBasic1/img/Foto 3.jpeg';
import GalleryImage3 from '../assets/undanganBasic1/img/Bareng.png';
import GalleryImage4 from '../assets/undanganBasic1/img/Pre_wed.png'
import '../assets/undanganBasic1/App.css'

function UndBasic1() {

    const events = [
      {
        title: 'Pembacaan Al-quran',
        description: 'Melantunkan ayat Alquran dengan alunan yang indah dan merdu.',
        image: QuranImage
      },
      {
        title: 'Ijab Kabul',
        description: 'Prosesi sakral yang akan menjadikan kedua mempelai sah sebagai suami istri.',
        image: IjabImage
      },
      {
        title: 'Menandatangani Buku Nikah',
        description: 'Dinyatakan sah sebagai suami istri di mata agama, maka kedua mempelai diminta untuk menandatangani dokumen pernikahan, salah satunya ialah buku nikah.',
        image: TTDImage
      },
      {
        title: 'Resepsi',
        description: 'Secara harfiah, ini adalah pertama kali nya kedua mempelai memperlihatkan kebersamaan untuk pertama kali nya dihadapan publik, setelah pernikahan.',
        image: ResepsiImage
      },
      {
        title: 'Foto Bersama',
        description: 'Kegiatan foto bersama kedua pengantin untuk mendokumentasi hari bahagia.',
        image: FotoImage
      }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="container mx-auto">
      <header className="relative header">
        <div className="header_plane anim"></div>

        {/* Menu Button */}
        <a className="main_menu_btn block" onClick={toggleMenu}>
          <span className="line line1 block"></span>
          <span className="line line2 block"></span>
          <span className="line line3 block"></span>
        </a>

        {/* Submenu */}
        <div className={`main_menu_block fixed top-0 left-0 w-full h-full bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="menu_wrapper flex flex-col items-center justify-center h-full">
            <div className="sub_menu anim mb-4">
              <ul className="text-center">
                <li className="mb-2"><a href="#married" className="text-xl" onClick={toggleMenu}>Undangan</a></li>
                <li className="mb-2"><a href="#when_where" className="text-xl" onClick={toggleMenu}>Kapan &amp; Dimana</a></li>
                <li className="mb-2"><a href="#events" className="text-xl" onClick={toggleMenu}>Rangkaian Acara</a></li>
                <li className="mb-2"><a href="#rsvp" className="text-xl" onClick={toggleMenu}>RSVP</a></li>
                <li className="mb-2"><a href="#gallery" className="text-xl" onClick={toggleMenu}>Galeri</a></li>
              </ul>
            </div>
            <div className="sub_img anim"></div>
          </div>
        </div>
        {/* Submenu End */}

        {/* Social Buttons */}
        <div className="header_social flex justify-center mt-4">
          <a href="#" className="mx-2 text-2xl"><i className="fa fa-twitter"></i></a>
          <a href="#" className="mx-2 text-2xl"><i className="fa fa-facebook"></i></a>
          <a href="#" className="mx-2 text-2xl"><i className="fa fa-pinterest"></i></a>
        </div>
      </header>

      <main>
        <section className="home_intro parallax bg-cover bg-center" style={{ backgroundImage: `url(${HomeImage})` }}>
          <div className="home_txt" data-0="opacity:1" data-top-bottom="opacity:0">
            {/* Intro Text */}
            <div className="box">
              <div className="title1 text-4xl font-bold mb-2">Save the Date!</div>
              <div className="title1 text-2xl"><span>20 - Maret - 2022</span></div>
            </div>
            <a href="#married" className="intro_down mt-4 inline-block">
              <span><i className="fa fa-angle-down text-4xl"></i></span>
            </a>
          </div>
          <div className="into_firefly"></div>
        </section>

        <section className="married clearfix py-16" id="married">
          <div className="container mx-auto px-4">
            <div className="im1 parallax bg-cover bg-center mb-8" style={{ backgroundImage: `url(${DF2Image})` }}></div>
            <div className="im2 parallax bg-cover bg-center mb-8" style={{ backgroundImage: `url(${AHImage})` }}></div>

            <div className="married_txt text-center" data-bottom="opacity:0" data-center="opacity:1">
              <h2 className="text-3xl font-bold mb-4">Anda Diundang!</h2>
              <p>Pada Tanggal 20 March, 2022</p>
              <p className="font-bold">Deffan Febrian &amp; Astin Hastuti</p>
              <p>di Kediaman Mempelai Wanita.</p>
              <a href="#rsvp" className="btn go bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block">RSVP Sekarang</a>

              <div className="married_coundown mt-8"></div>
              <div className="double_arrow mt-8"></div>
            </div>
          </div>
        </section>

        <section className="when_where text-white parallax bg-cover bg-center py-16" id="when_where" style={{ backgroundImage: `url(${HoverImage})` }} data-bottom-top="opacity:0;" data-bottom="opacity:1;">
          <div className="over bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="photocamera text-4xl mb-8"><span className="flaticon-slr2"></span></div>

            <div className="when_where_container text-center">
              <h2 className="text-3xl font-bold mb-8">Where &amp; When</h2>

              <div className="pattern1 mb-8"></div>
              <div className="title1 text-2xl mb-4">Kediaman Mempelai Wanita</div>
              <div className="title3 text-xl mb-4">
                <a className="maplink text-blue-300" href="https://goo.gl/maps/hHYuXmcKeETgoAFWA" target="_blank" rel="noopener noreferrer">
                  Pancuran Utara, Gg. Teng-teng, <br/> Kel. Sukapura, Kec. Kejaksan, Kota Cirebon <br/>
                  Jawa Barat, Indonesia<br/><i className="flaticon-map35"></i>
                </a>
              </div>

              <div className="pattern2 mb-8"></div>
              <div className="title1 text-2xl mb-2">Jam 8</div>
              <div className="title5 text-xl mb-4">PAGI, WIB</div>
              <div className="title4 text-xl mb-4">March 20<br/>Two Thousand and Twenty Two</div>
              <div className="pattern3 mb-8"></div>
              <div id="gmap_canvas" className="h-64 w-full"></div>
            </div>
          </div>
        </section>

        {/* <Events /> */}
        <section className="our_story events py-16" id="events">
            <h2 className="text-4xl font-bold text-center mb-12">Our Events</h2>
            <div className="story_wrapper flex flex-wrap justify-center">
              {events.map((event, index) => (
                <div key={index} className="story_item w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="story_img bg-cover bg-center h-64" style={{ backgroundImage: `url(${event.image})` }}>
                    <div className="story_img_plane"></div>
                  </div>
                  <div className="story_plane p-6 bg-white shadow-lg relative">
                    <div className="story_back absolute inset-0"></div>
                    <div className="story_txt relative z-10">
                      <div className="story_title text-2xl font-semibold mb-2">
                        {event.title}
                        <i></i>
                      </div>
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>


        {/* <RSVP /> */}
        <section className="rsvp py-16" id="rsvp">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8">Join Our Party</h2>

              <div className="envelope" data-100-top="@class:active" data-200-bottom="@class:">
                {/* <div className="envelope_front">
                  <div className="env_top_top bg-gray-300 h-16"></div>
                </div>
                <div className="envelope_back">
                  <div className="env_top bg-gray-300 h-16"></div>
                </div> */}

                <div className="paper bg-white shadow-lg p-8">

                  <div className="paper_title text-2xl font-semibold mb-6">Please RSVP by Feb 15th</div>

                  <div id="div_block_1">
                    <div className="txt_input mb-4">
                      <input type="text" className="form-control w-full p-3 border border-gray-300 rounded" id="name_block_1" placeholder="Your Name" />
                    </div>
                    <div className="txt_input mb-4">
                      <input type="text" className="form-control w-full p-3 border border-gray-300 rounded" id="guest_block_1" placeholder="Your Guest's Name" />
                    </div>
                    <div className="txt_input mb-4">
                      <input type="text" className="form-control w-full p-3 border border-gray-300 rounded" id="email_block_1" placeholder="Your E-mail" />
                    </div>
                    <div className="txt_input mb-4">
                      <select className="text-grey form-control w-full p-6 border border-gray-300 rounded" id="attending_block_1">
                        <option value="" disabled selected>Pilih Kehadiran</option>
                        <option value="hadir">Hadir</option>
                        <option value="tidak_hadir">Tidak Hadir</option>
                      </select>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Send
                    </button>
                    <p className="mt-6 text-center">
                      We’re excited to see you! Any questions, just email us at:
                      <a href="mailto:febriandeffan@gmail.com" className="text-blue-500"> febriandeffan@gmail.com</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

        {/* <Gallery /> */}
          <section className="gallery py-16" id="gallery">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8">Our Gallery</h2>
              
              <div className="gallery_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="gallery_item relative w-full lg:w-1/4">
                  <div className="gallery_txt absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href={GalleryImage1} title="Engagement Photos" className="text-white text-xl font-bold"><b>Together</b></a>
                  </div>
                  <img src={GalleryImage1} alt="Gallery 1" className="w-full h-auto"/>
                </div>

                <div className="gallery_item relative w-full lg:w-1/4">
                  <div className="gallery_txt absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href={GalleryImage2} title="Engagement Photos" className="text-white text-xl font-bold"><b>Until</b></a>
                  </div>
                  <img src={GalleryImage2} alt="Gallery 2" className="w-full h-auto"/>
                </div>

                <div className="gallery_item relative w-full lg:w-1/4">
                  <div className="gallery_txt absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href={GalleryImage3} title="Engagement Photos" className="text-white text-xl font-bold"><b>The</b></a>
                  </div>
                  <img src={GalleryImage3} alt="Gallery 3" className="w-full h-auto"/>
                </div>

                <div className="gallery_item relative">
                  <div className="gallery_txt absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href={GalleryImage4} title="Engagement Photos" className="text-white text-xl font-bold"><b>End</b></a>
                  </div>
                  <img src={GalleryImage4} alt="Gallery 4" className="w-full h-auto"/>
                </div>
              </div>
            </div>
          </section>
      </main>

      <section className="footer text-white bg-fixed bg-cover bg-center py-16" id="footer" style={{ backgroundImage: `url(${HoverImage})` }}>
        <div className="over bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="thanks text-6xl text-center mb-8">&#10084;</div>
          <div className="footer_txt text-center">
            <div className="footer_social mb-4">
              <a href="#" className="text-2xl mx-2"><i className="fa fa-facebook"></i></a>
            </div>
            <div className="title1 text-3xl font-bold">Deffan &amp; Astin</div>
            <div className="copyrights text-sm mt-2">
              © 2022 <a href="" className="underline">ASDF</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UndBasic1
