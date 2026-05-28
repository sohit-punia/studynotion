import React, { useState } from 'react';
import Modal from 'react-modal';

const DummyEmailModal = () => {
  const [emailModalIsOpen, setEmailModalIsOpen] = useState(false);

  const openModal = () => {
    setEmailModalIsOpen(true);
  };

  const closeModal = () => {
    setEmailModalIsOpen(false);
  };

  return (
    <div className="DummyEmailModal absolute lg:top-20 lg:left-20 top-[4.2rem] left-15 rounded-full px-2 cursor-pointer">
      <button
        onClick={openModal}
        className="text-black font-medium bg-[#ffffff] rounded-full px-2 cursor-pointer animate-wave"
      >
        Login Details
        
      </button>
      <Modal
        isOpen={emailModalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Dummy Email and Password"
        style={{
          content: {
            zIndex: '1000',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#808080', // Grey background color
            padding: '20px',
            borderRadius: '10px',
            color: 'white',
          },
          overlay: {
            zIndex: '999',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent grey-black overlay
            backdropFilter: 'blur(10px)', // Add blur effect
          },
        }}
      >
        <div>
          <p>Email:studynotaiontest@gmail.com </p>
          <p>Password: 12345</p>
        </div>
        <button
          onClick={closeModal}
          className="bg-richblack-700 rounded text-white px-4"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default DummyEmailModal;
