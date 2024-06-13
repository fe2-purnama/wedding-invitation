/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #c5395b;
`;

const Title = styled.h1`
  color: white;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
`;

const UserIcon = styled(FaUserCircle)`
  color: white;
  cursor: pointer;
  position: relative;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #c5395b;
  color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(22, 12, 12, 0.1);
  list-style: none;
  padding: 10px;
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 10;
`;

const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  & > svg {
    margin-right: 10px;
  }
`;

const HeaderDashboard = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const goToProfile = () => {
    navigate('/dashboard/profile');
    setIsDropdownOpen(false);
  };

  const goToHome = () => {
    navigate('/dashboard/dashboard_home');
    setIsDropdownOpen(false);
  };

  const handleSignOut = () => {
    // Implement your sign out logic here
    navigate('/home');
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Header>
      <Title onClick={goToHome}>Dashboard Undangan</Title>
      <Nav ref={dropdownRef}>
        <UserIcon size={30} onClick={toggleDropdown} />
        <DropdownMenu isOpen={isDropdownOpen}>
          <DropdownItem onClick={goToHome}>
            <FaHome /> Dashboard Home
          </DropdownItem>
          <DropdownItem onClick={goToProfile}>
            <FaUser /> Profile
          </DropdownItem>
          <DropdownItem onClick={handleSignOut}>
            <FaSignOutAlt /> Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Nav>
    </Header>
  );
};

export default HeaderDashboard;
