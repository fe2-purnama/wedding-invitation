/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom'



const InvitationList = ({ invitations, onDelete }) => {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate('/dashboard/edit');
  };

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl mb-4">Daftar Undangan</h2>
      <div className="flex flex-wrap gap-8">
        {invitations.map((invitation) => (
          <div key={invitation.id} className="p-4 border border-gray-300 rounded bg-gray-100 flex flex-col w-full sm:w-1/2 lg:w-2/12">
            <div className="mb-4">
              <div className="text-sm text-gray-600">{invitation.type === 'pernikahan' ? 'Undangan Pernikahan' : 'Undangan Lainnya'}</div>
              <span className="font-bold">{invitation.name}</span>
              <div className="text-sm text-gray-500 mt-2">
                Status undangan: {invitation.active ? 'Aktif' : 'Tidak Aktif'}
              </div>
            </div>
            <div className="flex flex-col">
              <button className="bg-[#c5395b] text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-[#c5396b] mb-2" onClick={goToEdit} >Edit undangan ini</button>
              <button onClick={() => onDelete(invitation.id)} className="bg-gray-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-gray-800">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

InvitationList.propTypes = {
  invitations: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InvitationList;
