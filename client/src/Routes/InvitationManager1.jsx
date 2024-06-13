/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HeaderDashboard from "../components/Dasboard/HeaderDashboard";
import InvitationModal from "../components/Dasboard/InvitationModal";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AccountDashboard from "../pages/Dashboard/AccountDashboard";
import Profile from "../pages/Dashboard/Profile";
import EditDashboard from "../pages/Dashboard/EditDashboard"
import DeleteConfirmationModal from "../components/Dasboard/DeleteConfirmationModal";
import PropTypes from "prop-types";

const InvitationManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(() => {
    const storedModalState = localStorage.getItem("isModalOpen");
    return storedModalState === "true";
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [invitations, setInvitations] = useState(() => {
    const storedInvitations = localStorage.getItem("invitations");
    return storedInvitations ? JSON.parse(storedInvitations) : [];
  });
  const [invitationToDelete, setInvitationToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("invitations", JSON.stringify(invitations));
  }, [invitations]);

  useEffect(() => {
    localStorage.setItem("isModalOpen", isModalOpen.toString());
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = (invitationId) => {
    setInvitationToDelete(invitationId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setInvitationToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleCreateInvitation = (invitation) => {
    setInvitations([...invitations, { id: Date.now(), ...invitation }]);
    closeModal();
  };

  const handleConfirmDelete = () => {
    setInvitations(
      invitations.filter((invitation) => invitation.id !== invitationToDelete)
    );
    closeDeleteModal();
  };

  const location = useLocation;

  return (
    <>
      {location.pathname !== "/edit" && <HeaderDashboard openModal={openModal} />}
      
      <Routes>
        <Route
          path="dashboard_home"
          element={<DashboardHome invitations={invitations} />}
        />
        <Route
          path="dashboard_account"
          element={
            <AccountDashboard
              invitations={invitations}
              onDelete={openDeleteModal}
              openModal={openModal}
            />
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="edit" element={<EditDashboard />} />
        <Route path="*" element={<Navigate to="dashboard_home" />} />
      </Routes>
      {isModalOpen && (
        <InvitationModal
          closeModal={closeModal}
          onCreate={handleCreateInvitation}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
};

InvitationManager.propTypes = {
  invitations: PropTypes.array,
  onDelete: PropTypes.func,
  openModal: PropTypes.func,
};

export default InvitationManager;
