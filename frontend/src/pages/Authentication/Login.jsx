/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import bg from '../../assets/lll.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/login`, { username, password });
      const datas = response.data;
      if (datas.message == 'Login Accepted') {
        if (datas.role == 'user') {
          sessionStorage.setItem('user', JSON.stringify(datas.token));
          alert(`Welcome, ${datas.username}`);
          navigate('/dashboard/home');
        }
        if (datas.role == 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(datas.token));
          alert('Welcome, Admin');
          navigate('/admin');
        }
      } else {
        alert('Wrong Username or Password');
        setError('Wrong Username or Password');
      }
    } catch (error) {
      alert('Error Login. Please try again later.');
      setError('Error Login. Please try again later.');
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="m-20 bg-gray-100 rounded-lg shadow-lg flex md:flex-row flex-col w-[800px]">
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 rounded-lg md:rounded-l-none md:rounded-r-lg">
          <form className="my-20 space-y-6 items-center justify-center" onSubmit={handleLogin}>
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
            </div>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            <div className="flex items-center border rounded-lg">
              <label className="sr-only">Username</label>
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="flex-1 p-2.5 text-sm text-gray-900 border-none focus:ring-blue-500 focus:border-blue-500 rounded-r-lg"
                placeholder="Input ur Username Here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border rounded-lg">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
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
                placeholder="Input ur Password Here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                //onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center">
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                <Link to="/register">Silahkan register jika belum punya akun</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src={bg} alt="" className="w-auto h-[550px] object-cover rounded-l-lg md:rounded-l-none md:rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setIsRegister: PropTypes.func.isRequired,
};

export default Login;
