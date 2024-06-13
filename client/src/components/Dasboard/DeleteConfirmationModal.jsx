/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Button = styled.button`
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:first-of-type {
        background-color: #f44336; 
        color: white;
    }

    &:last-of-type {
        background-color: #9e9e9e; 
        color: white;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <Modal>
                <p>Apakah Anda yakin ingin menghapus undangan ini?</p>
                <Button onClick={onConfirm}>OK</Button>
                <Button onClick={onClose}>Cancel</Button>
            </Modal>
        </ModalOverlay>
    );
};

DeleteConfirmationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
