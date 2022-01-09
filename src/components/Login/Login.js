import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './Login.css';

function Login({
  isOpen,
  onSubmit,
  onClose,
  onOutsideClick,
  setEmail,
  email,
  setPassword,
  password,
}) {
  return (
    <ModalWithForm
      title="Sign Up"
      isOpen={isOpen}
      onSubmit={onSubmit}
      onClose={onClose}
      onOutsideClick={onOutsideClick}
      setEmail={setEmail}
      email={email}
      password={password}
      setPassword={setPassword}
    />
  );
}
export default Login;
