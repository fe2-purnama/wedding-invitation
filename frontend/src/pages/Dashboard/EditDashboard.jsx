/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaBars, FaArrowLeft, FaTimes, FaTachometerAlt, FaEye, FaFileAlt, FaUserFriends, FaCogs, FaQuestionCircle, FaChevronDown, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [content, setContent] = useState('Dashboard Content');
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState([]);
  const [attend, setAttend] = useState([]);
  const [congratulations, setCongratulations] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setDropdownOpen(''); // Menutup semua dropdown ketika sidebar di tutup
    }
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = (menu) => {
    if (!sidebarOpen) setSidebarOpen(true); // Membuka sidebar ketika dropdown di pencet
    setDropdownOpen(dropdownOpen === menu ? '' : menu);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/dashboard/dashboard_account');
  };

  const handleGuestNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const addOrUpdateGuest = async () => {
    if (guestName.trim() === '') return;

    if (editIndex !== null) {
      const updatedGuest = { name: guestName };
      try {
        const response = await axios.put(`http://localhost:3000/guests/${guests[editIndex].id}`, updatedGuest);
        const updatedGuests = guests.map((guest, index) => (index === editIndex ? response.data : guest));
        setGuests(updatedGuests);
        setEditIndex(null);
      } catch (error) {
        console.error('Error updating guest:', error);
      }
    } else {
      const newGuest = { name: guestName };
      try {
        const response = await axios.post('http://localhost:3000/guests', newGuest);
        setGuests([...guests, response.data]);
      } catch (error) {
        console.error('Error adding guest:', error);
      }
    }
    setGuestName('');
  };

  const editGuest = (index) => {
    setGuestName(guests[index].name);
    setEditIndex(index);
  };

  const deleteGuest = async (index) => {
    try {
      await axios.delete(`http://localhost:3000/guests/${guests[index].id}`);
      const updatedGuests = guests.filter((_, i) => i !== index);
      setGuests(updatedGuests);
    } catch (error) {
      console.error('Error deleting guest:', error);
    }
  };

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/guests');
        setGuests(response.data);
      } catch (error) {
        console.error('Error fetching guests:', error);
      }
    };
    const fetchAttends = async () => {
      try {
        const response = await axios.get('http://localhost:3000/attend');
        setAttend(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };
    const fetchCongratulations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/congratulations');
        setCongratulations(response.data);
      } catch (error) {
        console.error('Error fetching congratulations:', error);
      }
    };
    const fetchGifts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/gifts');
        setGifts(response.data);
      } catch (error) {
        console.error('Error fetching gifts:', error);
      }
    };
    const fetchInvitations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/invitations');
        setInvitations(response.data);
      } catch (error) {
        console.error('Error fetching invitations:', error);
      }
    };

    fetchGuests();
    fetchAttends();
    fetchCongratulations();
    fetchGifts();
    fetchInvitations();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute

    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 0 && hour < 11) return 'Selamat Pagi';
    if (hour >= 11 && hour < 15) return 'Selamat Siang';
    if (hour >= 15 && hour < 18) return 'Selamat Sore';
    return 'Selamat Malam';
  };


  const getBrideAndGroomNames = () => {
    const weddingInvitation = invitations.find(inv => inv.type === 'pernikahan');
    return weddingInvitation ? weddingInvitation.name : 'Tamu';
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className={`bg-white text-gray-500 flex flex-col transition-width duration-300 ${sidebarOpen ? 'w-64' : 'w-20 p-3'}`}>
        <div className="flex items-center justify-between p-4 text-2xl font-bold cursor-pointer mt-16">
          <div onClick={toggleSidebar}>
            {sidebarOpen ? 'Logo' : <FaBars />}
          </div>
          {sidebarOpen && (
            <button onClick={toggleSidebar} className="text-gray-500">
              <FaTimes />
            </button>
          )}
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
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Tamu Undangan')}>Tamu Undangan</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Daftar Kehadiran')}>Daftar Kehadiran</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Ucapan')}>Ucapan</li>
                <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Hadiah')}>Hadiah</li>
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
            <li className="p-4 flex items-center cursor-pointer" onClick={() => handleContentChange('Bantuan')}>
              <FaQuestionCircle className="mr-2" /> {sidebarOpen && 'Bantuan'}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <button className="mt-14 mb-5 flex items-center" onClick={goBack}>
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <h1 className="text-2xl font-bold mb-4">{content}</h1>

        {/* Greeting based on time and invitation name */}
        {content === 'Dashboard Content' && (
          <div className="mb-8 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">{getGreeting()}, {getBrideAndGroomNames()}!</h2>
          </div>
        )}

        {/* Add the new statistics components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">Total Invited Guests</h2>
            <p className="text-2xl">{guests.length}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">Total Attendees</h2>
            <p className="text-2xl">{attend.length}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">Total Congratulations</h2>
            <p className="text-2xl">{congratulations.length}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">Total Gifts</h2>
            <p className="text-2xl">{gifts.length}</p>
          </div>
        </div>

        {content === 'Tamu Undangan' && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Guest List</h2>
            <div className="mb-4">
              <input
                type="text"
                value={guestName}
                onChange={handleGuestNameChange}
                placeholder="Enter guest name"
                className="border p-2 rounded mr-2"
              />
              <button onClick={addOrUpdateGuest} className="bg-blue-500 text-white p-2 rounded">
                {editIndex !== null ? 'Update Guest' : 'Add Guest'}
              </button>
            </div>
            <ul>
              {guests.map((guest, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{guest.name}</span>
                  <div>
                    <button onClick={() => editGuest(index)} className="text-yellow-500 mr-2">
                      <FaEdit />
                    </button>
                    <button onClick={() => deleteGuest(index)} className="text-red-500">
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {content === 'Daftar Kehadiran' && (
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Daftar Kehadiran Tamu</h3>
            <table className="w-full mt-2 border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Nama Tamu</th>
                  <th className="border p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {attend.length > 0 ? (
                  attend.map((attend, index) => (
                    <tr key={index}>
                      <td className="border p-2 text-center">{attend.name}</td>
                      <td className="border p-2 text-center">{attend.attending}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border p-2 text-center" colSpan="2">
                      Belum ada data kehadiran
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {content === 'Ucapan' && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Daftar Ucapan</h2>
            {congratulations.length > 0 ? (
              <ul>
                {congratulations.map((congratulations, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{congratulations.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Belum ada Ucapan yang diterima</p>
            )}
          </div>
        )}

        {content === 'Hadiah' && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Daftar Hadiah</h2>
            {gifts.length > 0 ? (
              <ul>
                {gifts.map((gift, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{gift.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Belum ada hadiah yang diterima</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

