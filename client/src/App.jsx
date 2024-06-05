/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import DesignPage from './pages/DesignPage';
import TestimonialPage from './pages/TestimonialPage';
import Login from './pages/Login';
import UndVIP from './pages/UndVIP';
import CardPremium from './pages/CardPremium';
import UndBasic1 from './pages/UndBasic2';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="design" element={<DesignPage />} />

          <Route path="portfolio" element={<TestimonialPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/design/design3" element={<UndVIP />} />
        <Route path="/design/design2" element={<CardPremium />} />
        <Route path="/design/design1" element={<UndBasic1 />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter,  Route, Routes } from 'react-router-dom';

// // import UndDiv from './pages/UndVIP';
// // import UndBasic1 from './pages/UndBasic1';

// // import UndanganBasic1 from './pages/UndanganBasic1';
// import Login from '../src/pages/Login'


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
           
//           <Route path="/" element={<Login />}>
            
            
//           </Route>  
   
//       </Routes>
//     </BrowserRouter>
    
//   );
// };

// // export default App;
// import React, { useState } from 'react';
// import Login from '../src/pages/Login';
// import Register from '../src/pages/Register';

// const App = () => {
//   const [isRegister, setIsRegister] = useState(false);

//   return (
//     <div className="App">
//       {isRegister ? (
//         <Register setIsRegister={setIsRegister} />
//       ) : (
//         <Login setIsRegister={setIsRegister} />
//       )}
//     </div>
//   );
// };

// export default App;




