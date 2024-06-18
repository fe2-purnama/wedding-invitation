/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import bg from '../../assets/lll.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom'; 

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:3000/auth/register', { //Ganti URL BACKEND Disini!!!
          username,
          email,
          password,
          phone,
          address,
          role: 'user',
        });
        alert("Registrasi Berhasil");
        navigate('/login'); // Redirect to user dashboard
    } catch (error) {
      setUsername('')
      setEmail('')
      setPassword('')
      setPhone('')
      setAddress('')
      console.error('Error registering:', error);
      setError('Error registering. Please try again later.');
    }
  };

  // .then((response) => {
  //   if (response === 'Username Sudah Terdaftar') {
  //     alert('Username Sudah Terdaftar');
  //     setUsername('');
  //     setEmail('');
  //     setPassword('');
  //     setPhone('');
  //     setAddress('');
  //   } else {
  //     alert('User Berhasil Registrasi');
  //     navigate('/login');
  //   }
  // })

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="m-20 bg-gray-100 rounded-lg shadow-lg flex md:flex-row flex-col w-[900px]">
        <div className="hidden md:block md:w-1/2">
          <img src={bg} alt="" className="w-auto h-full object-cover rounded-l-lg md:rounded-l-lg md:rounded-r-lg" />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 rounded-lg md:rounded-l-lg md:rounded-r-lg">
          <form className="my-2 space-y-4" onSubmit={handleRegister}>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Register</h2>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            <div className="flex items-center border rounded-lg">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="flex-1 p-2.5 text-sm text-gray-900 border-none focus:ring-blue-500 focus:border-blue-500 rounded-r-lg"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                //onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center border rounded-lg">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 2v.01L10 10 18 4.01V4H2zm0 2.51V16h16V6.51L10 12 2 6.51z" />
                </svg>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="flex-1 p-2.5 text-sm text-gray-900 border-none focus:ring-blue-500 focus:border-blue-500 rounded-r-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                //onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center border rounded-lg">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1C8.14 1 5 4.14 5 8v4H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V8c0-3.86-3.14-7-7-7zm0 2c2.75 0 5 2.25 5 5v4H7V8c0-2.75 2.25-5 5-5zm-1 11h2v5h-2v-5z" />
                </svg>
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="flex-1 p-2.5 text-sm text-gray-900 border-none focus:ring-blue-500 focus:border-blue-500 rounded-r-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                //onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center border rounded-lg">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c2.63 5.64 8.57 11.58 14.21 14.21l2.1-2.1a1.996 1.996 0 0 0-.2-2.94l-3.72-2.98a2.01 2.01 0 0 0-2.45.16l-1.27 1.27a15.72 15.72 0 0 1-7.45-7.45l1.27-1.27c.68-.68.78-1.78.16-2.45L7.25 3.48a1.996 1.996 0 0 0-2.94-.2l-2.1 2.1c-.29.3-.44.67-.44 1.06 0 1.58.59 3.05 1.68 4.14z" />
                </svg>
              </span>
              <input
                id="phone"
                name="phone"
                type="number"
                required
                className="flex-1 p-2.5 text-sm text-gray-900 border-none focus:ring-blue-500 focus:border-blue-500 rounded-r-lg"
                placeholder="No-Telp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                //onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center border rounded-lg">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 5.1 11.74 6.29 13.15.36.42.91.67 1.48.67s1.12-.25 1.48-.67C13.9 20.74 19 14.25 19 9c0-3.87-3.13-7-7-7zm0 17.27C10.26 16.1 7 11.43 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.43-3.26 7.1-5 10.27zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="flex-1 p-2.5 text-sm text-gray-900 border-none focus:ring-blue-500 focus:border-blue-500 rounded-r-lg"
                placeholder="Alamat"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                //onChange={handleInputChange}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Link to="/login">Register</Link>
              </button>
            </div>

            <div className="text-center pt-4">
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                <Link to="/login">Kembali ke login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setIsRegister: PropTypes.func.isRequired,
};

export default Register;
