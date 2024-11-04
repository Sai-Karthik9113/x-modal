import React, { useState } from "react";
import './Modal.css';
import CustomButton from "../Button/Button";

const CustomModal = ({ onClose }) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const handleUserNameInput = (e) => {
        setUserName(e.target.value);
    }

    const handleEmailInput = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePhoneNumberInput = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleNewDate = (e) => {
        setDateOfBirth(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const dob = new Date(dateOfBirth);
        const today = new Date();
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailFormat.test(userEmail)) {
            alert("Invalid email. Please check your email address.");
        } else if (phoneNumber.length !== 10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
        } else if (dob > today) {
            alert("Invalid date of birth. Date of birth cannot be in the future.");
        } else {
            setUserName("");
            setUserEmail("");
            setPhoneNumber("");
            setDateOfBirth("");
        }

    }

    const handleModalClose = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose();
        }
    }

    return (
        <div className="modal" onClick={handleModalClose}>
            <div className="modal-content">
                <h1>Fill Details</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        <h4>Username:</h4>
                    </label>
                    <input id="username" type="text" value={userName} onChange={handleUserNameInput} required />
                    <label htmlFor="email">
                        <h4>Email Address:</h4>
                    </label>
                    <input id="email" type="email" value={userEmail} onChange={handleEmailInput} required />
                    <label htmlFor="phone">
                        <h4>Phone Number:</h4>
                    </label>
                    <input id="phone" type="number" value={phoneNumber} onChange={handlePhoneNumberInput} required />
                    <label htmlFor="dob">
                        <h4>Date of Birth:</h4>
                    </label>
                    <input id="dob" type="date" value={dateOfBirth} onChange={handleNewDate} placeholder="dd-mm-yy" required />
                    <CustomButton className="submit-button">
                        Submit
                    </CustomButton>
                </form>
            </div>
        </div>
    );
}

export default CustomModal;