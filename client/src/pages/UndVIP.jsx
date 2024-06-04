import React, { useState, useEffect } from "react";
import "https://kit.fontawesome.com/3b9b00101d.js"
import flower from "../assets/flower2.png";
import prewed from "../assets/prewed.jpg"
import m1 from "../assets/kevin2.jpg"
// import Galleries from "./Galleries";
import w1 from "../assets/windu2.jpg"
import wed from '../assets/wed.jpg'
import ftr from '../assets/ftr.jpg'
import MusicPlayer from "../components/MusicPlayer"; //music player pada undangan
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const UndVIP = () => {
    
    const images = [
        'https://api.our-wedding.link/uploads/f400f8e0-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/f403df10-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/f4223c80-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/f439bc20-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/f43cc960-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/f4499aa0-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/29a18720-e7fc-11ed-98be-b566ca689cd2.jpg',
        'https://api.our-wedding.link/uploads/2a338df0-e7fc-11ed-b2db-9ff0c0d42cfe.jpg',
        'https://api.our-wedding.link/uploads/f3fcda30-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/f3fa9040-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
        'https://api.our-wedding.link/uploads/f3fdc490-b90a-11ee-9c5f-6bbbfa84b82d.jpg',
    ];

    
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };
    const [formData, setFormData] = useState({
        name: '',
        attending: 'yes',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('RSVP Submitted');
      };
      const calculateTimeLeft = () => {
        const weddingDate = new Date('2024-06-30T12:59:59');
        const now = new Date();
        const difference = weddingDate - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
      
      


    return (
        <>
            {!isOpen ? (
                // bungkus amplop
                <section className="flex justify-center items-center bg-gray-50 h-screen w-screen fixed z-10 phone:w-full tablet:w-3/5 laptop:w-3/5 desktop:w-3/5" id="open-modal">
                    <div className="absolute bottom-0 left-0 h-full flex flex-col justify-end">
                        <img src={flower} alt="Flower" className="w-48 -scale-x-100 " />
                    </div>
                    <div className="font-montserrat text-center mx-4">
                        <div className="font-bold tracking-widest mb-4">
                            <p className="font-garamond text-2xl phone:text-xs tablet:text-2xl laptop:text-2xl desktop:text-2xl mt-4">MINGGU, 00 JUNI  2024</p>
                        </div>
                        <div className="font-garamond flex flex-col items-center text-center text-xl phone:text-xs tablet:text-xl mb-4">
                            <p>Kepada Yth.</p>
                            <span className="block">Bapak/Ibu/Saudara/i</span>
                        </div>
                        <p id="name" className="font-garamond text-center font-bold m-3 text-3xl">[Nama Tamu]</p>
                        <div className="flex justify-center">
                            <button onClick={handleOpen} className="open-button font-garamond p-2 w-50 tracking-wide border border-black rounded-md hover:bg-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                <p className="text-xl">Open</p>
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 h-full flex flex-col justify-start">
                        <img src={flower} alt="Flower" className="w-48 -scale-y-100" />
                    </div>
                </section>
            ) : (
                <section>
                    {/* section doa */}
                    <section className="min-h-screen bg-[#D9CCC3] flex  relative">
                        {/* Left side: Design and Ayat */}
                        <div className="lg:w-2/4 flex flex-col items-center justify-center pl-20 pr-10">
                            <div className="text-center mb-6">
                            <img src="path_to_cover_image.jpg" alt="Wedding Design" className="w-full h-full object-cover opacity-90" />
                            </div>
                            <div className="text-center mt-4">
                            <p className="text-xl text-gray-700 mb-2">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ</p>
                            <p className="text-gray-600">Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)</p>
                            </div>
                        </div>

                        {/* gambar */}
                        <div className="lg:w-1/4 flex flex-col items-center justify-center relative">
                            <img src={prewed} alt="Cover Image" className="w-full h-auto object-cover" style={{ height: '100%' }} />
                        </div>

                        {/* hitung mundur */}
                        <div className="lg:w-1/4 flex flex-col items-center justify-end mb-20 pb-5 mt-auto mr-20 bg-gray-100 relative" style={{ overflow: 'hidden', marginLeft: '-70px', zIndex: 1 }}>
                            <div className="text-center z-10 mt-4">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Countdown</h2>
                            <h3 className="text-xl font-normal mb-4 text-gray-900">Minggu, 30 Juni 2024</h3>
                            <div className="flex justify-center space-x-4 text-xl text-gray-700">
                                <div>
                                <span>{timeLeft.days}</span>
                                <p>Hari</p>
                                </div>
                                <div>
                                <span>{timeLeft.hours}</span>
                                <p>Jam</p>
                                </div>
                                <div>
                                <span>{timeLeft.minutes}</span>
                                <p>Menit</p>
                                </div>
                                <div>
                                <span>{timeLeft.seconds}</span>
                                <p>Detik</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    {/* pengantin */}
                    <section className="min-h-screen bg-gradient-to-b from-[#D9CCC3] to-gray-100 flex flex-col items-center justify-center">
                        <div className="text-center pt-20">
                            <h1 className="text-4xl font-bold mb-4">The Brides and The Groom</h1>
                        </div>
                        <div className="flex flex-wrap w-full h-full">
                            
                            {/* Kevin Section (Kiri atas) */}
                            <div className="w-full flex flex-col md:flex-row md:items-end md:mb-10 ml-20 mt-10">
                            <div className="w-full md:w-1/2 flex flex-row items-center mb-5 md:mb-0">
                                <div className="w-1/2 mr-10">
                                <div className="carousel" id="carousel1">
                                    <div className="carousel-inner">
                                    <div className="carousel-slide active">
                                        <img src={m1} alt="Slide 1" className="object-cover w-full h-full rounded-[10px]" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="w-1/2 font-garamond">
                                <p className="text-lg font-bold font-garamond md:text-3xl mb-3">Mohammad Kevin Dananjaya</p>
                                <p className="text-wrap text-sm md:text-xl">
                                    Keluarga Bpk. Wawan Yogaswara dan <span className="block">Ibu Keniawati</span>
                                </p>
                                <div className="flex justify-start mt-3">
                                    <button className="rounded-full bg-slate-400 hover:bg-slate-600 duration-300">
                                    <a href="https://www.instagram.com" className="text-2xl text-white">
                                        <i className="fa-brands fa-instagram m-3"></i>
                                    </a>
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2"></div>
                            </div>

                            {/* Winda Section (kanan bawah) */}
                            <div className="w-full flex flex-col md:flex-row md:items-center md:mb-20 mr-20">
                            <div className="w-full md:w-1/2"></div>
                            <div className="w-full md:w-1/2 flex flex-row items-center mb-5">
                            <div className="w-1/2 font-garamond ">
                                <p className="text-lg font-bold font-garamond md:text-3xl mb-3">Windu Widuri</p>
                                <p className="text-wrap text-sm md:text-xl">
                                    Keluarga Bpk. Ruslan Jaelani dan <span className="block">Ibu Ida Sriwida A</span>
                                </p>
                                <div className="flex justify-start mt-3">
                                    <button className="rounded-full bg-slate-400 hover:bg-slate-600 duration-300">
                                    <a href="https://www.instagram.com" className="text-2xl text-white">
                                        <i className="fa-brands fa-instagram m-3"></i>
                                    </a>
                                    </button>
                                </div>
                                </div>
                                <div className="w-1/2">
                                <div className="carousel" id="carousel1">
                                    <div className="carousel-inner">
                                    <div className="carousel-slide active">
                                        <img src={w1} alt="Slide 1" className="object-cover w-full h-full rounded-[10px]" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                            </div>

                            
                        </div>
                    </section>

                    {/* video dan slider gambar */}
                    <section id="galleries" className="bg-gray-100 h-full">
                        <div className="container mx-auto px-20 pt-10 ">
                            <div className="text-center pb-10">
                                <h1 className="text-4xl font-bold mb-4">Our Memories</h1>
                            </div>
                            <div className="flex flex-wrap ">
                                <div className="w-full xl:w-2/5 self-center">
                                <div className="title-gallery">
                                    <h1 className="text-fourth font-title animate__fadeInUp">
                                    Moment <span className="title-child font-additional">yang berharga </span>
                                    </h1>
                                </div>
                                <div className="movequote bg-primary p-1 mt-3 animate__fadeInUp">
                                    <p className="text-fourth font-title">
                                    Menciptakan kenangan adalah hadiah yang tak ternilai harganya. Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu singkat.
                                    <br />
                                    <em>*title dan kata kata bisa di edit di menu gallery</em>
                                    </p>
                                </div>
                                </div>
                                <div className="w-full xl:w-3/5 mt-5 xl:mt-0 pl-5">
                                <div className="video animate__zoomIn">
                                    <div className="relative w-full h-0 pb-[56.25%]">
                                    <iframe
                                        src="https://www.youtube.com/embed/LHXNqbstdq0?controls=1&rel=0&mute=1&loop=1&playsinline=1&modestbranding=0&autoplay=1&enablejsapi=1&origin=https://our-wedding.link&widgetid=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="photos animate__fadeInUp mt-10 ">
                                <Swiper
                                spaceBetween={15}
                                slidesPerView={4}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                modules={[Navigation, Pagination, Autoplay]}
                                >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index}>
                                    <div className="item mb-20">
                                        <a data-fancybox="gallery_small" href={src}>
                                        <img src={src} alt="photo" className="w-[350px] h-[380px] object-cover"  />
                                        </a>
                                    </div>
                                    </SwiperSlide>
                                ))}
                                </Swiper>
                            </div>
                        </div>
                    </section>

                    {/* waktu dan tempat */}
                    <section className="bg-[#D9CCC3] relative flex flex-col items-center justify-center pb-20">
                        <div className="w-[400px] h-[400px] top-0 left-0">
                            <img src={wed} alt="bjhdf" className="rounded-b-[50%] object-cover" style={{ overflow: 'hidden', marginTop: '-50px', zIndex: 1 }} />
                        </div>
                        <section className="w-full h-full flex justify-center items-center text-center">
                            {/* Bagian Akad Nikah */}
                            <div className="w-1/2 mr-10 ml-20">
                                <div className="acara borders-secondary akad wow animate__ animate__fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <h2 className="text-2xl pb-2">Akad Nikah</h2>
                                <p className="text-3xl pb-1">Jumat, 28 April 2023</p>
                                <p className="text-1xl pb-1">
                                    pukul  09:00 WIB - selesai
                                </p>
                                <a href="https://maps.google.com/?cid=685464459623750616" target="_blank" >
                                    <p className="adress font-content">
                                    Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
                                    </p>
                                </a>
                                </div>
                                
                            </div>
                            {/* Bagian Resepsi */}
                            <div className="w-1/2 ml-10 mr-20">
                                <div className="acara borders-secondary resepsi wow animate__ animate__fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <h2 className="text-2xl pb-2">Resepsi</h2>
                                    <p className="text-3xl pb-1">Jumat, 15 Maret 2024</p>
                                    <p className="text-1xl pb-1">
                                        pukul  15:00 WIB - selesai
                                    </p>
                                    <a href="https://www.google.com/maps/place/Plataran+Menteng/@-6.191967,106.8263864,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f423590651f7:0x983424b56075bd8!8m2!3d-6.191967!4d106.8285751" target="_blank" className="color-third">
                                        <p className="adress font-content">
                                        DoubleTree by Hilton Jakarta - Diponegoro Jakarta Pusat
                                        </p>
                                    </a>
                                </div>
                                
                            </div>
                        </section>
                        <div className="flex justify-center pt-5">
                            <a href="https://www.google.com/calendar/render?action=TEMPLATE&amp;text=Acara%20Pernikahan%20Preset%20dan%20Design&amp;ctz=Asia/Jakarta&amp;dates=20241019T090000/20241019T090000%7D&amp;details=Acara%20Pernikahan%20Preset%20dan%20Design&amp;location=Plataran%20Menteng,%20Jalan%20HOS.%20Cokroaminoto,%20RT.6/RW.4,%20Gondangdia,%20Kota%20Jakarta%20Pusat,%20Daerah%20Khusus%20Ibukota%20Jakarta,%20Indonesia.t&amp;sprop=&amp;sprop=name:"
                                rel="noopener"
                                target="_blank"
                                className="btn btn-calendar bg-transparent hover:bg-white text-black border-black border-solid border-2 rounded-full py-2 px-6 transition duration-300 ease-in-out"
                                style={{ visibility: 'visible', animationName: 'zoomIn' }}>
                                Simpan acara ke kalender
                            </a>
                        </div>

                    </section>
                    
                    {/* rspv */}
                    <section>
                            <section className="py-10 bg-[#D9CCC3] flex items-center justify-center">
                            <div className="w-2/5 ">
                                <img src={wed} alt="bjhdf" className="rounded-br-[30%] rounded-tl-[30%] w-[300px] h-[400px] ml-auto mr-10 object-cover" />
                                
                            </div>
                            <form className="w-3/5 p-6 rounded shadow-lg w-400 ml-0 mr-20" onSubmit={handleSubmit}>
                            <h2 className="text-3xl font-semibold  text-gray-800 pb-5">Konfirmasi Kehadiran</h2>
                            <div className="">
                                <input
                                type="text"
                                name="name"
                                placeholder="Nama Lengkap"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 mb-5"
                                />
                                <input type="radio" name="attending" value={formData.attending} onChange={handleChange} id="hadir" className="mb-3" /><span className="text-gray-600 pl-5">Saya akan datang</span><br />
                                <input type="radio" name="attending" value={formData.attending} onChange={handleChange} id="absen"  /><span className="text-gray-600 pl-5">Maaf, saya tidak bisa datang</span>
                            </div>
                            
                            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200 mt-5">
                                Kirim
                            </button>
                            </form>
                            
                        </section>
                        <section className="bg-[#D9CCC3] py-10 flex items-center justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1098.4750174621342!2d119.40797460867292!3d-5.143784971733459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d00658db7b5%3A0x31b6867dc556f58e!2sMakassar!5e0!3m2!1sid!2sid!4v1717431381610!5m2!1sid!2sid"
                                width="1200"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </section>
                    </section>
                    
                    {/* hadiah */}
                    <section className="bg-gradient-to-b from-white to-gray-200 pb-20 flex items-center justify-center">
                        <div className="w-2/5"></div>
                        <div className="w-3/5 text-center py-10 bg-gray-300 rounded-bl-[50%]">
                            <h1 className="text-3xl font-bold mb-10">Kirim Hadiah</h1>
                            <div className="flex w-full justify-center">
                                <div className="w-1/2 text-start ml-10">
                                    <p className="text-2xl font-semibold mb-2 mt-2">Hadiah atau Kado</p>
                                    <p>Diantar langsung ke bagian hadiah saat acara</p>
                                </div>
                                <div className="w-1/2 text-start ml-10">
                                    <p className="mb-2 text-2xl font-semibold">Direct Transfer</p>
                                    <p className="mb-4">Bisa Transfer ke rekening berikut :</p>
                                    <div className="mb-4">
                                        <p className="font-bold">BCA</p>
                                        <p>1787401984 <span className="fa fa-copy pl-2"></span></p>
                                        <p>A/N. John Doe</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">BRI</p>
                                        <p>1787401984 <span className="fa fa-copy pl-2"></span></p>
                                        <p>A/N. John Doe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* rencananya mau kasih fitur ucapan dan doa, nanti diubah kalau [perlu] */}
                    <section className="min-h-screen bg-white flex items-center justify-center">
                        
                        <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
                        <p className="text-xl text-gray-700">Cerita tentang kami dan perjalanan cinta kami.</p>
                        </div>
                    </section>
                    {/* nanti diubah kalau perlu */}
                    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
                        <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                        <h2 className="text-3xl mb-4 font-semibold text-gray-800"></h2>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-600">Nama</label>
                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-600">Email</label>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-600">Kehadiran</label>
                            <select
                            name="attending"
                            value={formData.attending}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                            <option value="yes">Ya</option>
                            <option value="no">Tidak</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200">
                            Kirim
                        </button>
                        </form>
                    </section>
                    
                    {/* footer */}
                    <footer className="bg-gray-700 text-white">
                        {/* <p>&copy; 2024 Wedding Invitation. All rights reserved.</p> */}
                        <div className="flex w-full justify-center">
                            <div className="w-1/2">
                                <img src={ftr} alt="" className="w-auto h-auto" />
                            </div>
                            <div className="w-1/2 p-10">
                                <p className="mb-10">Merupakan suatu kehormatan dan kebahagiaan bagi kami <br /> apabila, Bapak / Ibu / Saudara / i. berkenan hadir untuk <br /> memberikan doa restunya kami ucapkan terimakasih.</p>
                                <div>
                                    <p className="text-2xl font-semibold mb-3">Turut Mengundang :</p>
                                    <p>skdjsdkn</p>
                                    <p>bsdiohosdnkw</p>
                                    <p>bakdlihfice</p>
                                </div>
                                <p className="text-3xl font-bold mt-10">Terima Kasih <span className="fa fa-smile"></span></p>
                            </div>
                        </div>
                    </footer>
                    {/* fitur music player di undangan, filenya adalah : MusicPlayer.jsx */}
                    <MusicPlayer />
                </section>
            )}
        </>
    );
}

export default UndVIP;
