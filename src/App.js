import React, { useState } from 'react';
import './App.css';
import CustomButton from './Button/Button';
import CustomModal from './Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const  toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <CustomButton onClick={toggleModal}>
        Open Form
      </CustomButton>

      {isModalOpen && <CustomModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
