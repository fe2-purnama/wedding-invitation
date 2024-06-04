import React from 'react';
import { AboutStyle, AboutImg, AboutHeading, AboutText, ButtonStyle } from './StyledBody';
import ImgAbout from '../assets/gml2.png';

const AboutPage = () => {
  const handleDashboardClick = () => {
    window.location.href = 'https://gamelab.id/dashboard';
  };

  return (
    <section>
      <AboutStyle>
        <AboutImg>
          <img src={ImgAbout} style={{ height: "300px", width: "300px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} loading="lazy" />
        </AboutImg>
        <AboutText>
          <AboutHeading>GAMELAB.ID</AboutHeading>
          <p>GAMELAB.ID membantumu mengoptimalkan skill agar siap kerja melalui program pelatihan, magang online, dan kelas intensif yang diampu oleh para profesional di bidangnya.</p>
          <ButtonStyle onClick={handleDashboardClick}>Dashboard</ButtonStyle>
        </AboutText>
      </AboutStyle>
    </section>
  );
};

export default AboutPage;
