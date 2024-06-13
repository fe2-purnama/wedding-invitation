/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InvitationModal = ({ closeModal, onCreate }) => {
const [invitationType, setInvitationType] = useState(() => {
return localStorage.getItem('invitationType') || 'pernikahan';
});
const [brideName, setBrideName] = useState(() => {
return localStorage.getItem('brideName') || '';
});
const [groomName, setGroomName] = useState(() => {
return localStorage.getItem('groomName') || '';
});
const [nameOrder, setNameOrder] = useState(() => {
return localStorage.getItem('nameOrder') || 'groomFirst';
});

useEffect(() => {
localStorage.setItem('invitationType', invitationType);
}, [invitationType]);

useEffect(() => {
localStorage.setItem('brideName', brideName);
}, [brideName]);

useEffect(() => {
localStorage.setItem('groomName', groomName);
}, [groomName]);

useEffect(() => {
localStorage.setItem('nameOrder', nameOrder);
}, [nameOrder]);

const handleSubmit = (e) => {
e.preventDefault();
if (!brideName || !groomName) {
    alert('Nama panggilan wanita dan nama panggilan pria harus diisi!');
    return;
}
const nameRegex = /^[a-zA-Z\s]+$/;
if (!nameRegex.test(brideName) || !nameRegex.test(groomName)) {
    alert('Nama panggilan harus berisi huruf saja!');
    return;
}
const invitationName = nameOrder === 'groomFirst' ? `${groomName} & ${brideName}` : `${brideName} & ${groomName}`;
onCreate({ type: invitationType, name: invitationName });
closeModal();
localStorage.removeItem('invitationType');
localStorage.removeItem('brideName');
localStorage.removeItem('groomName');
localStorage.removeItem('nameOrder');
};

return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
    <div className="bg-white p-8 rounded-lg w-full max-w-md relative mx-4 sm:mx-auto my-4 mt-20 max-h-full overflow-y-auto">
    <button onClick={closeModal} className="absolute top-2 right-2 text-2xl">&times;</button>
    <h2 className="text-xl mb-4">Tambah Undangan Baru</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
        <label className="font-bold">Tipe undangan</label>
        <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center">
            <input
                type="radio"
                name="invitationType"
                value="pernikahan"
                checked={invitationType === 'pernikahan'}
                onChange={() => setInvitationType('pernikahan')}
                className="mr-2"
            />
            Undangan Pernikahan
            </label>
            <label className="flex items-center">
            <input
                type="radio"
                name="invitationType"
                value="lainnya"
                checked={invitationType === 'lainnya'}
                onChange={() => setInvitationType('lainnya')}
                className="mr-2"
            />
            Undangan Lainnya
            </label>
        </div>
        </div>
        <div>
        <label className="font-bold">Nama panggilan wanita</label>
        <input
            type="text"
            value={brideName}
            onChange={(e) => setBrideName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
        />
        </div>
        <div>
        <label className="font-bold">Nama panggilan pria</label>
        <input
            type="text"
            value={groomName}
            onChange={(e) => setGroomName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
        />
        </div>
        <div>
        <label className="font-bold">Urutan nama</label>
        <div className="flex gap-2 mt-2">
            <label className="flex items-center">
            <input
                type="radio"
                name="nameOrder"
                value="groomFirst"
                checked={nameOrder === 'groomFirst'}
                onChange={() => setNameOrder('groomFirst')}
                className="mr-2"
            />
            Nama pria terlebih dahulu
            </label>
            <label className="flex items-center">
            <input
                type="radio"
                name="nameOrder"
                value="brideFirst"
                checked={nameOrder === 'brideFirst'}
                onChange={() => setNameOrder('brideFirst')}
                className="mr-2"
            />
            Nama wanita terlebih dahulu
            </label>
        </div>
        </div>
        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        Buat Sekarang
        </button>
    </form>
    </div>
</div>
);
};

InvitationModal.propTypes = {
closeModal: PropTypes.func.isRequired,
onCreate: PropTypes.func.isRequired,
};

export default InvitationModal;
