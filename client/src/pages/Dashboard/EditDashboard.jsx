/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars, FaArrowLeft, FaShareAlt, FaTachometerAlt, FaEye, FaFileAlt, FaUserFriends, FaCogs, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [content, setContent] = useState('Dashboard Content');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? '' : menu);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/dashboard/dashboard_account');
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className={`bg-white text-gray-500 flex flex-col transition-width duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 text-2xl font-bold cursor-pointer" onClick={toggleSidebar}>
          {sidebarOpen ? 'Logo' : <FaBars />}
        </div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 flex items-center cursor-pointer" onClick={() => handleContentChange('Dashboard Content')}>
              <FaTachometerAlt className="mr-2" /> {sidebarOpen && 'Dashboard'}
            </li>
            <li className="p-4 flex flex-col">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('tampilan')}>
                <div className="flex items-center">
                  <FaEye className="mr-2" /> {sidebarOpen && 'Tampilan'}
                </div>
                {sidebarOpen && <FaChevronDown />}
              </div>
              <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'tampilan' ? 'max-h-screen' : 'max-h-0'}`}>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Tampilan Submenu 1')}>Submenu 1</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Tampilan Submenu 2')}>Submenu 2</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Tampilan Submenu 3')}>Submenu 3</li>
              </ul>
            </li>
            <li className="p-4 flex flex-col">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('isi')}>
                <div className="flex items-center">
                  <FaFileAlt className="mr-2" /> {sidebarOpen && 'Isi'}
                </div>
                {sidebarOpen && <FaChevronDown />}
              </div>
              <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'isi' ? 'max-h-screen' : 'max-h-0'}`}>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Isi Submenu 1')}>Submenu 1</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Isi Submenu 2')}>Submenu 2</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Isi Submenu 3')}>Submenu 3</li>
              </ul>
            </li>
            <li className="p-4 flex flex-col">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('tamu')}>
                <div className="flex items-center">
                  <FaUserFriends className="mr-2" /> {sidebarOpen && 'Tamu'}
                </div>
                {sidebarOpen && <FaChevronDown />}
              </div>
              <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'tamu' ? 'max-h-screen' : 'max-h-0'}`}>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Tamu Undangan')}>Jumlah Tamu Undangan</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Kehadiran')}>Jumlah Kehadiran</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Ucapan')}>Jumlah Ucapan</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Hadiah')}>Jumlah Hadiah</li>
              </ul>
            </li>
            <li className="p-4 flex flex-col">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('pengaturan')}>
                <div className="flex items-center">
                  <FaCogs className="mr-2" /> {sidebarOpen && 'Pengaturan'}
                </div>
                {sidebarOpen && <FaChevronDown />}
              </div>
              <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'pengaturan' ? 'max-h-screen' : 'max-h-0'}`}>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Pengaturan Submenu 1')}>Submenu 1</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Pengaturan Submenu 2')}>Submenu 2</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Pengaturan Submenu 3')}>Submenu 3</li>
              </ul>
            </li>
            <li className="p-4 flex items-center">
              <a href="https://wa.me/yourwhatsapplink" className="flex items-center">
                <FaQuestionCircle className="mr-2" /> {sidebarOpen && 'Bantuan'}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <button className="flex items-center text-gray-700" onClick={goBack}>
            <FaArrowLeft className="mr-2" /> Kembali
          </button>
          <button className="flex items-center text-gray-700">
            <FaShareAlt className="mr-2" /> Share
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-3 flex">
          <div className="w-1/3 bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Informasi</h2>
            <p>{content}</p>
          </div>
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>Selamat datang di halaman dashboard Anda.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

