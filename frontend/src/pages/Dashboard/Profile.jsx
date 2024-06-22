/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Fungsi untuk mengambil data pengguna dari backend
    const fetchUserData = async () => {
      try {
        // Ganti URL ini dengan endpoint backend
        const response = await fetch('https://api.example.com/user/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}` // Misalnya, menggunakan token di localStorage
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUserData({
            username: data.username,
            email: data.email,
            phone: data.phone
          });
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    // Logika sign out bisa ditambahkan di sini
    alert("Anda telah keluar");
    // Misalnya menghapus token
    localStorage.removeItem('token');
    navigate('/home'); // Arahkan ke halaman utama setelah sign out
  };

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl mb-4">Informasi Pengguna</h2>
      <div className="flex flex-col gap-4">
        <div className="p-4 border border-gray-300 rounded bg-gray-100">
          <p><strong>UserName:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Nomor HP:</strong> {userData.phone}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-[#c5395b] text-white py-4 px-2 sm:py-2 sm:px-4 rounded hover:bg-red-600"
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

export default Profile;
