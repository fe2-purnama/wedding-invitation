/* eslint-disable no-unused-vars */
// Dashboard.jsx 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/dummy1.png'
import image2 from '../../assets/dummy2.png'
import image3 from '../../assets/dummy3.png'

const DashboardHome = ({ invitations }) => {
  const navigate = useNavigate();

  const goToAccountDashboard = () => {
    navigate('/dashboard/dashboard_account');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    image1,
    image2,
    image3,
  ];

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl mb-4 text-center">Dashboard Home</h2>
      <Slider {...sliderSettings} className="mb-8">
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Foto ke ${index}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border border-gray-300 rounded bg-gray-100 flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-bold">Total Undangan yang Kamu Buat</h3>
            <p className="text-3xl">{invitations.length}</p>
          </div>
          <button
            onClick={goToAccountDashboard}
            className="bg-[#c5395b] text-white py-2 px-4 rounded hover:bg-[#c5396b]"
          >
            Lihat daftar undangan
          </button>
        </div>
      </div>
    </div>
  );
};

DashboardHome.propTypes = {
  invitations: PropTypes.array.isRequired,
};

export default DashboardHome;
