/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import bg from '../../assets/lll.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsRegister }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8080/login', {
  //       emailOrUsername,
  //       password,
  //     });
  //     alert(response.data.msg);
  //     navigate('/InvitationManager'); // Navigasi setelah login berhasil
  //   } catch (error) {
  //     alert(error.response.data.msg);
  //   }
  // };

  // Testing tanpa database, harap hapus ini ketika sudah ada database.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi login berhasil
    alert('Login berhasil');
    navigate('/dashboard');
  };
  

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="m-20 bg-gray-100 rounded-lg shadow-lg flex md:flex-row flex-col w-[800px]">
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 rounded-lg md:rounded-l-none md:rounded-r-lg">
          <form className="my-20 space-y-6 items-center justify-center" onSubmit={handleSubmit}>
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login
              </h2>
            </div>
            
            <div className="flex items-center border rounded-lg">
              <label htmlFor="email-or-username" className="sr-only">
                Email or Username
              </label>
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
              </span>
              <input 
                id="email-or-username" 
                name="username" 
                type="text" 
                autoComplete="email"
                required 
                className="flex-1 p-2.5 text-sm text-gray-900 border-none focus:ring-blue-500 focus:border-blue-500 rounded-r-lg" 
                placeholder="Username" 
                value={emailOrUsername} 
                onChange={(e) => setEmailOrUsername(e.target.value)} 
              />
            </div>
            <div className="flex items-center border rounded-lg">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border-r border-gray-300 bg-gray-100 rounded-l-md">
                <svg className="w-4 h-10 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1C8.14 1 5 4.14 5 8v4H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V8c0-3.86-3.14-7-7-7zm0 2c2.75 0 5 2.25 5 5v4H7V8c0-2.75 2.25-5 5-5zm-1 11h2v5h-2v-5z"/>
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
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setIsRegister(true)}
              >
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



// // import { useState, useEffect } from 'react';
// // import { createClient } from '@supabase/supabase-js';
// // import { Auth } from '@supabase/auth-ui-react';
// // import { ThemeSupa } from '@supabase/auth-ui-shared';
// // import { useNavigate } from 'react-router-dom';

// // const supabase = createClient(
// //   'https://jrpjxlicyljxaajeklld.supabase.co',
// //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycGp4bGljeWxqeGFhamVrbGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5ODkzNjgsImV4cCI6MjAzMjU2NTM2OH0.C9HlQZb3u7N4ZwPDK666M5SXv5xSIkX1BMEcHDcyZT4'
// // );

// // export default function App() {
// //   const [session, setSession] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     supabase.auth.getSession().then(({ data: { session } }) => {
// //       setSession(session);
// //     });

// //     const {
// //       data: { subscription },
// //     } = supabase.auth.onAuthStateChange((_event, session) => {
// //       setSession(session);
// //     });

// //     return () => subscription.unsubscribe();
// //   }, []);

// //   const handleLogout = async () => {
// //     await supabase.auth.signOut();
// //     navigate('/');  // Ganti '/logged-out' dengan rute yang sesuai
// //   };

// //   if (!session) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //         <Auth
// //           supabaseClient={supabase}
// //           appearance={{ theme: ThemeSupa }}
// //         />
// //       </div>
// //     );
// //   } else {
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //         <h1 className="text-2xl font-bold mb-4">Logged in!</h1>
// //         <button
// //           onClick={handleLogout}
// //           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     );
// //   }
// // }


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', { email, password });
//       if (response.data.success) {
//         navigate('/dashboard');
//       } else {
//         alert('Login failed');
//       }
//     } catch (error) {
//       alert('An error occurred');
//     }
//   };

//   return (
//     <div className="w-full max-w-xs">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Login
//           </button>
//           <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
//             Silahkan register jika belum punya akun
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

