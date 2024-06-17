/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import './PremiumTemplate.css';
import NavigationBar from "../../../components/PremiumTemplateComponent/NavigationBar";
import CopyConfirmationModal from './CopyConfirmationModal'; // Import the new modal component
import MusicPlayer from '../../../components/MusicPlayer';

Modal.setAppElement('#root');

const PremiumTemplate = () => {
  const weddingDate = moment('2024-06-07 10:00:00');
  const [timeRemaining, setTimeRemaining] = useState('');
  const [showNavBar, setShowNavBar] = useState(false);
  const sectionsRef = useRef([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [copyModalIsOpen, setCopyModalIsOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(weddingDate.diff(now));
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setTimeRemaining(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = sectionsRef.current;
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setCopyModalIsOpen(true);
  };

  const closeCopyModal = () => {
    setCopyModalIsOpen(false);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-900 text-white flex flex-col items-center">
      {showNavBar && <NavigationBar />}
      <main className="flex-1 w-full p-4">
        <section id="section1" className="bg-teal-700 p-8 shadow-md rounded-lg max-w-3xl mx-auto mb-8 text-center reveal-from-right"
          ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="mb-4">
            <h2 className="text-3xl font-semibold">Wedding Date</h2>
            <p className="text-xl">24.05.2024, Saturday</p>
            <p className="text-xl mt-4">{timeRemaining} </p>
          </div>
        </section>
        <section id="section2" className="bg-teal-700 p-8 shadow-md rounded-lg max-w-3xl mx-auto mb-8 text-center reveal-from-right"
          ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="flex justify-center mb-4">
            <img src="https://via.placeholder.com/150" alt="Bride" className="rounded-full w-32 h-32 mx-4 border-4 border-white" />
            <img src="https://via.placeholder.com/150" alt="Groom" className="rounded-full w-32 h-32 mx-4 border-4 border-white" />
          </div>
          <p className="text-2xl">Cwk-nya & Cwk-nya</p>
        </section>
        <section id="section3" className="bg-teal-700 p-8 shadow-md rounded-lg max-w-3xl mx-auto mb-8 text-center reveal-from-left"
          ref={(el) => (sectionsRef.current[1] = el)}>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg">Your hands your hearts - We have met many souls before but it's our hearts that found each other.</p>
        </section>
        <section id="section4" className="bg-teal-700 p-8 shadow-md rounded-lg max-w-3xl mx-auto mb-8 text-center reveal-from-left"
          ref={(el) => (sectionsRef.current[3] = el)}>
          <h2 className="text-3xl font-semibold mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://via.placeholder.com/200" alt="Gallery 1" className="w-full h-auto rounded cursor-pointer" onClick={() => openModal('https://via.placeholder.com/800')} />
            <img src="https://via.placeholder.com/200" alt="Gallery 2" className="w-full h-auto rounded cursor-pointer" onClick={() => openModal('https://via.placeholder.com/800')} />
            <img src="https://via.placeholder.com/200" alt="Gallery 3" className="w-full h-auto rounded cursor-pointer" onClick={() => openModal('https://via.placeholder.com/800')} />
            <img src="https://via.placeholder.com/200" alt="Gallery 4" className="w-full h-auto rounded cursor-pointer" onClick={() => openModal('https://via.placeholder.com/800')} />
          </div>
        </section>
        <section id="section5" className="bg-teal-700 p-8 shadow-md rounded-lg max-w-3xl mx-auto mb-8 text-center reveal-from-right"
          ref={(el) => (sectionsRef.current[4] = el)}>
          <h2 className="text-3xl font-semibold mb-4">Gifts</h2>
          <p className="text-lg mb-4">Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we would greatly appreciate a contribution to our honeymoon fund.</p>
          <div className="text-center flex justify-center space-x-8 items-center">
            <div
              className="text-lg mb-2 cursor-pointer flex flex-col items-center"
              onClick={() => copyToClipboard("1234567890")}
            >
              <img src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Putih.png" alt="BCA Blue Logo" className="w-13 h-13 object-contain mb-2" />
              <span className="underline">1234567890</span>
            </div>
            <div
              className="text-lg mb-2 cursor-pointer flex flex-col items-center"
              onClick={() => copyToClipboard("0987654321")}
            >
              <img src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Putih.png" alt="BCA White Logo" className="w-13 h-13 object-contain mb-2" />
              <span className="underline">0987654321</span>
            </div>
          </div>
        </section>
        <section id="section6" className="bg-teal-700 p-8 shadow-md rounded-lg max-w-3xl mx-auto text-center reveal-from-left"
          ref={(el) => (sectionsRef.current[5] = el)}>
          <h2 className="text-3xl font-semibold mb-4">RSVP</h2>
          <form className="bg-teal-600 p-8 shadow-md rounded-lg max-w-3xl mx-auto text-center">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="attendance">Attendance</label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="attendance">
                <option>Akan datang</option>
                <option>Tidak Akan datang</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Submit</button>
            </div>
          </form>
        </section>
      </main>
      <footer className="bg-teal-800 w-full p-4 shadow-md text-center reveal-from-right">
        <p>&copy; 2024 PremiumTemplate. All rights reserved.</p>
      </footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">&times;</button>
        {selectedImage && <img src={selectedImage} alt="Selected" className="modal-image" />}
      </Modal>
      <CopyConfirmationModal isOpen={copyModalIsOpen} onClose={closeCopyModal} copiedText={copiedText} />
      <MusicPlayer />
    </div>
  );
};

export default PremiumTemplate;
