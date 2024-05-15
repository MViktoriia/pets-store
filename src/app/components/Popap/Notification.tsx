'use client';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/modal';
import NotificationPopup from './NotificationPopup';

function Notification() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsModalOpen(true), 2000);
  }, []);
  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <NotificationPopup />
    </Modal>
  );
}

export default Notification;
