// AccountDashboard.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import InvitationList from '../../components/Dasboard/InvitationList';

const AccountDashboard = ({ invitations, onDelete, openModal }) => {
  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl mb-4 text-center">Account Dashboard</h2>
      <button onClick={openModal}className="bg-[#c5395b] text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-[#c5396b] mb-4">
      + Buat Undangan Baru
      </button>
      <InvitationList invitations={invitations} onDelete={onDelete} />
    </div>
  );
};

AccountDashboard.propTypes = {
  invitations: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default AccountDashboard;
