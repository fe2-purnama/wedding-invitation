// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';

// import Layout from './pages/Layout';
// import NoPage from './pages/NoPage';
// import DesignPage from './pages/DesignPage1';
// import TestimonialPage from './pages/TestimonialPage';
// import Login from './pages/Login';
// import UndVIP from './pages/UndVIP';
// import CardPremium from './pages/CardPremium';
// import UndBasic1 from './pages/UndBasic2';
// import Register from './pages/Register';
// import InvitationManager from './Routes/InvitationManager';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="design" element={<DesignPage />} />

//           <Route path="portfolio" element={<TestimonialPage />} />
//           <Route path="about" element={<AboutPage />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//         <Route path="/design/design3" element={<UndVIP />} />
//         <Route path="/design/design2" element={<CardPremium />} />
//         <Route path="/design/design1" element={<UndBasic1 />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="home" element={<InvitationManager />} />

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageRoute from './Routes/HomePageRoute';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Admin from './pages/Dashboard/AdminDash';
import InvitationManager from './Routes/InvitationManager';
import { ThemeProvider } from './components/Theme/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<HomePageRoute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard/*" element={<InvitationManager />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
