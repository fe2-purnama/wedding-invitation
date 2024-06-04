import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Galleries = () => {
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

  return (
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
  );
};

export default Galleries;
