/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import HeaderDashboard from '../components/HeaderDashboard';
import InvitationModal from '../components/InvitationModal';
import Dashboard from '../pages/DashboardHome';
import AccountDashboard from '../pages/AccountDashboard';
import Profile from '../pages/Profile';
import PropTypes from 'prop-types';

const InvitationManager = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [invitations, setInvitations] = useState(() => {
const storedInvitations = localStorage.getItem('invitations');
return storedInvitations ? JSON.parse(storedInvitations) : [];
});

useEffect(() => {
localStorage.setItem('invitations', JSON.stringify(invitations));
}, [invitations]);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

const handleCreateInvitation = (invitation) => {
setInvitations([...invitations, { id: Date.now(), ...invitation }]);
closeModal();
};

const handleDeleteInvitation = (invitationId) => {
if (window.confirm("Apakah Anda yakin ingin menghapus undangan ini?")) {
    setInvitations(invitations.filter(invitation => invitation.id !== invitationId));
}
};

return (
<>
    <HeaderDashboard openModal={openModal} />
    <Routes>
    <Route path="/dashboard_home" element={<Dashboard invitations={invitations} />} />
    <Route
        path="/account"
        element={<AccountDashboard
        invitations={invitations}
        onDelete={handleDeleteInvitation}
        openModal={openModal}
        />}
    />
    <Route path="/profile" element={<Profile />} />
    <Route path="/home" element={<Navigate to="/dashboard_home" />} />
    </Routes>
    {isModalOpen && <InvitationModal closeModal={closeModal} onCreate={handleCreateInvitation} />}
</>
);
};

InvitationManager.propTypes = {
invitations: PropTypes.array,
onDelete: PropTypes.func,
openModal: PropTypes.func,
};

export default InvitationManager;
