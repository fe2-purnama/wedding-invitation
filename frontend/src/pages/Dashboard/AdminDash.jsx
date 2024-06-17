/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBars, FaUserFriends, FaQuestionCircle, FaEnvelope, FaTachometerAlt, FaSignOutAlt, FaEdit, FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [content, setContent] = useState('Dashboard Content');
  const [users, setUsers] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [editUserIndex, setEditUserIndex] = useState(null);
  const [editInvitationIndex, setEditInvitationIndex] = useState(null);
  const [editInvitationId, setEditInvitationId] = useState(null); // Add editInvitationId state

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleContentChange = (newContent) => setContent(newContent);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []); 

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    document.querySelectorAll('tbody input[type="checkbox"]').forEach(checkbox => checkbox.checked = checked);
  };

  const handleEditInvitation = (index) => {
    setEditInvitationIndex(index);
    const invitation = invitations[index];
    document.querySelector('form').elements.namedItem('invitationLink').value = invitation.invitationLink;
    setEditInvitationId(invitation.invitationId);
  };

  const handleAddInvitation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newInvitation = Object.fromEntries(formData.entries());
    if (editInvitationIndex !== null) {
      const updatedInvitations = invitations.map((invitation, index) => index === editInvitationIndex ? { ...newInvitation, invitationId: editInvitationId } : invitation);
      setInvitations(updatedInvitations);
      setEditInvitationIndex(null);
      setEditInvitationId(null);
    } else {
      const randomId = Math.random().toString(36).substr(2, 8);
      newInvitation.invitationId = randomId;
      setInvitations([...invitations, newInvitation]);
    }
    e.target.reset();
  };

  const handleDeleteInvitation = (index) => {
    setInvitations(invitations.filter((_, i) => i !== index));
  };

  // const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users'); // Replace with your actual API endpoint
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error fetching users');
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());
    try {
      const response = await axios.post('http://localhost:5000/users', newUser); // Replace with your actual API endpoint
      setUsers([...users, response.data]);
      alert('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user');
    }
    e.target.reset();
  };

  const handleEditUser = async (index) => {
    const user = users[index];
    
    
     document.querySelector('form').elements.namedItem('username').value = user.username;
     document.querySelector('form').elements.namedItem('email').value = user.email;
     document.querySelector('form').elements.namedItem('password').value = user.password;
     document.querySelector('form').elements.namedItem('phone').value = user.phone;
     document.querySelector('form').elements.namedItem('address').value = user.address;
    try {
      const response = await axios.put(`http://localhost:5000/users/${user.id}`, user);
      setEditUserIndex(index);
      updatedUsers[index] = response.data;
      const updatedUsers = [...users];
      setUsers(updatedUsers);
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user');
    }
  };

  const handleDeleteUser = async (index) => {
    const user = users[index];
    try {
      await axios.delete(`http://localhost:5000/users/${user.id}`); // Replace with your actual API endpoint
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };


  const renderContent = () => {
    if (content === 'List User') {
      return (
        <>
          <form className="mb-4" onSubmit={handleAddUser}>
            <input name="username" type="text" placeholder="Username" className="mr-2 p-2 border" required />
            <input name="email" type="email" placeholder="Email" className="mr-2 p-2 border" required />
            <input name="password" type="password" placeholder="Password" className="mr-2 p-2 border" required />
            <input name="phone" type="tel" placeholder="Phone" className="mr-2 p-2 border" required />
            <input name="address" type="text" placeholder="Address" className="mr-2 p-2 border" required />
            <button type="submit" className="p-2 bg-blue-500 text-white">Add</button>
          </form>
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr>
                {users.length > 0 && <th className="border border-gray-300 p-2"><input type="checkbox" onChange={handleSelectAll} /></th>}
                <th className="border border-gray-300 p-2">Username</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Password</th>
                <th className="border border-gray-300 p-2">Phone</th>
                <th className="border border-gray-300 p-2">Address</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 text-center"><input type="checkbox" /></td>
                  <td className="border border-gray-300 p-2 text-center">{user.username}</td>
                  <td className="border border-gray-300 p-2 text-center">{user.email}</td>
                  <td className="border border-gray-300 p-2 text-center">{user.password}</td>
                  <td className="border border-gray-300 p-2 text-center">{user.phone}</td>
                  <td className="border border-gray-300 p-2 text-center">{user.address}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button className="mr-2" onClick={() => handleEditUser(index)}><FaEdit /></button>
                    <button onClick={() => handleDeleteUser(index)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    } else if (content === 'List Undangan') {
      return (
        <>
          <form className="mb-4" onSubmit={handleAddInvitation}>
            <input name="invitationId" type="text" placeholder="ID Undangan (Auto Generate)" className="mr-2 p-2 border" disabled />
            <input name="invitationLink" type="text" placeholder="Link Panggilan Undangan" className="mr-2 p-2 border" required />
            <button type="submit" className="p-2 bg-blue-500 text-white">Add</button>
          </form>
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr>
                {invitations.length > 0 && <th className="border border-gray-300 p-2"><input type="checkbox" onChange={handleSelectAll} /></th>}
                <th className="border border-gray-300 p-2">ID Undangan</th>
                <th className="border border-gray-300 p-2">Link Panggilan Undangan</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {invitations.map((invitation, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 text-center"><input type="checkbox" /></td>
                  <td className="border border-gray-300 p-2 text-center">{invitation.invitationId}</td>
                  <td className="border border-gray-300 p-2 text-center">{invitation.invitationLink}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button className="mr-2" onClick={() => handleEditInvitation(index)}><FaEdit /></button>
                    <button onClick={() => handleDeleteInvitation(index)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          

        </>
      );
    } else {
      return <p>{content}</p>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className={`bg-white m-3 rounded-[10px] text-gray-500 flex flex-col transition-width duration-300 ${sidebarOpen ? 'w-60 p-3' : 'w-20 p-3'}`}>
        <div className="p-4 text-2xl font-bold cursor-pointer" onClick={toggleSidebar}>
          {sidebarOpen ? 'Logo' : <FaBars />}
        </div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 flex items-center cursor-pointer" onClick={() => handleContentChange('Dashboard Content')}>
              <FaTachometerAlt className="mr-2" /> {sidebarOpen && 'Dashboard'}
            </li>
            <li className="p-4 flex items-center cursor-pointer" onClick={() => handleContentChange('List User')}>
              <FaUserFriends className="mr-2" /> {sidebarOpen && 'User'}
            </li>
            <li className="p-4 flex items-center cursor-pointer" onClick={() => handleContentChange('List Undangan')}>
              <FaEnvelope className="mr-2" /> {sidebarOpen && 'Undangan'}
            </li>
            <li className="p-4 flex items-center">
              <a href="https://wa.me/yourwhatsapplink" className="flex items-center">
                <FaQuestionCircle className="mr-2" /> {sidebarOpen && 'Bantuan'}
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 flex items-center cursor-pointer" onClick={() => navigate('/home')}>
          <FaSignOutAlt className="mr-2" /> {sidebarOpen && 'Logout'}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-3 flex">
          <div className="bg-white p-4 shadow-lg rounded-lg w-full">
            <h2 className="text-xl font-bold mb-4">Informasi</h2>
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
