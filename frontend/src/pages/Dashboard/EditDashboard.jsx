// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { FaBars, FaArrowLeft, FaShareAlt, FaTachometerAlt, FaEye, FaFileAlt, FaUserFriends, FaCogs, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [dropdownOpen, setDropdownOpen] = useState('');
//   const [content, setContent] = useState('Dashboard Content');

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const toggleDropdown = (menu) => {
//     setDropdownOpen(dropdownOpen === menu ? '' : menu);
//   };

//   const handleContentChange = (newContent) => {
//     setContent(newContent);
//   };

//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate('/dashboard/dashboard_account');
//   };

//   return (
//     <div className="flex h-screen bg-gray-200">
//       {/* Sidebar */}
//       <aside className={`bg-white text-gray-500 flex flex-col transition-width duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
//         <div className="p-4 text-2xl font-bold cursor-pointer" onClick={toggleSidebar}>
//           {sidebarOpen ? 'Logo' : <FaBars />}
//         </div>
//         <nav className="flex-1">
//           <ul>
//             <li className="p-4 flex items-center cursor-pointer" onClick={() => handleContentChange('Dashboard Content')}>
//               <FaTachometerAlt className="mr-2" /> {sidebarOpen && 'Dashboard'}
//             </li>
//             <li className="p-4 flex flex-col">
//               <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('tampilan')}>
//                 <div className="flex items-center">
//                   <FaEye className="mr-2" /> {sidebarOpen && 'Tampilan'}
//                 </div>
//                 {sidebarOpen && <FaChevronDown />}
//               </div>
//               <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'tampilan' ? 'max-h-screen' : 'max-h-0'}`}>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Tampilan Submenu 1')}>Submenu 1</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Tampilan Submenu 2')}>Submenu 2</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Tampilan Submenu 3')}>Submenu 3</li>
//               </ul>
//             </li>
//             <li className="p-4 flex flex-col">
//               <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('isi')}>
//                 <div className="flex items-center">
//                   <FaFileAlt className="mr-2" /> {sidebarOpen && 'Isi'}
//                 </div>
//                 {sidebarOpen && <FaChevronDown />}
//               </div>
//               <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'isi' ? 'max-h-screen' : 'max-h-0'}`}>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Isi Submenu 1')}>Submenu 1</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Isi Submenu 2')}>Submenu 2</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Isi Submenu 3')}>Submenu 3</li>
//               </ul>
//             </li>
//             <li className="p-4 flex flex-col">
//               <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('tamu')}>
//                 <div className="flex items-center">
//                   <FaUserFriends className="mr-2" /> {sidebarOpen && 'Tamu'}
//                 </div>
//                 {sidebarOpen && <FaChevronDown />}
//               </div>
//               <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'tamu' ? 'max-h-screen' : 'max-h-0'}`}>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Tamu Undangan')}>Tamu Undangan</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Kehadiran')}>Daftar Kehadiran</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Ucapan')}>Ucapan</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Jumlah Hadiah')}>Hadiah</li>
//               </ul>
//             </li>
//             <li className="p-4 flex flex-col">
//               <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('pengaturan')}>
//                 <div className="flex items-center">
//                   <FaCogs className="mr-2" /> {sidebarOpen && 'Pengaturan'}
//                 </div>
//                 {sidebarOpen && <FaChevronDown />}
//               </div>
//               <ul className={`pl-8 overflow-hidden transition-ease-n-out duration-300 ${dropdownOpen === 'pengaturan' ? 'max-h-screen' : 'max-h-0'}`}>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Pengaturan Submenu 1')}>Submenu 1</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Pengaturan Submenu 2')}>Submenu 2</li>
//                 <li className="p-2 cursor-pointer" onClick={() => handleContentChange('Pengaturan Submenu 3')}>Submenu 3</li>
//               </ul>
//             </li>
//             <li className="p-4 flex items-center">
//               <a href="https://wa.me/yourwhatsapplink" className="flex items-center">
//                 <FaQuestionCircle className="mr-2" /> {sidebarOpen && 'Bantuan'}
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="flex items-center justify-between bg-white shadow p-4">
//           <button className="flex items-center text-gray-700" onClick={goBack}>
//             <FaArrowLeft className="mr-2" /> Kembali
//           </button>
//           <button className="flex items-center text-gray-700">
//             <FaShareAlt className="mr-2" /> Share
//           </button>
//         </header>

//         {/* Dashboard Content */}
//         <div className="flex-1 p-3 flex">
//           <div className="w-1/3 bg-white p-4 shadow-lg rounded-lg">
//             <h2 className="text-xl font-bold mb-4">Informasi</h2>
//             <p>{content}</p>
//           </div>
//           <div className="flex-1 p-4">
//             <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
//             <p>Selamat datang di halaman dashboard Anda.</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaBars, FaArrowLeft, FaShareAlt, FaTachometerAlt, FaEye, FaFileAlt, FaUserFriends, FaCogs, FaQuestionCircle, FaChevronDown, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [content, setContent] = useState('Dashboard Content');
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState([]);
  const [attend, setAttend] = useState([]);
  const [attendName, setAttendName] = useState('');
  const [statusName, setStatusName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

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

  const handleGuestNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleAttendChange = (event) => {
    setAttendName(event.target.value);
    setStatusName(event.target.value);
  };

  // const addGuest = async () => {
  //   if (guestName.trim() === '') return;

  //   const newGuest = { name: guestName };
  //   try {
  //     const response = await axios.post('http://localhost:3000/guests', newGuest);
  //     setGuests([...guests, response.data]);
  //     setGuestName('');
  //   } catch (error) {
  //     console.error('Error adding guest:', error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchGuests = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/guests');
  //       setGuests(response.data);
  //     } catch (error) {
  //       console.error('Error fetching guests:', error);
  //     }
  //   };
  //   fetchGuests();
  // }, []);

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
        console.error('Error fetching guests:', error);
      }
    };
    fetchGuests();
    fetchAttends();
  }, []);

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
            {content === 'Tamu Undangan' && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Tambah Tamu</h3>
                <input
                  type="text"
                  value={guestName}
                  onChange={handleGuestNameChange}
                  className="p-2 border rounded w-full mb-2"
                  placeholder="Nama Tamu"
                />
                <button
                  onClick={addOrUpdateGuest}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Add
                </button>
                <h3 className="text-lg font-semibold mt-4">Daftar Tamu</h3>
                <table className="w-full mt-2 border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">Nama Tamu</th>
                      <th className="border p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest, index) => (
                      <tr key={index}>
                        <td className="border p-2 text-center">{guest.name}</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <button className="mr-2" onClick={() => editGuest(index)}><FaEdit /></button>
                          <button onClick={() => deleteGuest(index)}><FaTrash /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )} 
            {content === 'Daftar Kehadiran' && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Daftar Kehadiran Tamu</h3>
                
                <table className="w-full mt-2 border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">Nama Tamu</th>
                      <th className="border p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attend.map((attend, index) => (
                      <tr key={index}>
                        <td className="border p-2 text-center">{attend.name}</td>
                        <td className="border p-2 text-center">{attend.attending}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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


