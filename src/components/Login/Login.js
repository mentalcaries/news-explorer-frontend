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
  onSwitchModal,
  submitError
  
}) {
  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onSubmit={onSubmit}
      onClose={onClose}
      onOutsideClick={onOutsideClick}
      setEmail={setEmail}
      email={email}
      password={password}
      setPassword={setPassword}
      userOption="Sign Up"
      onSwitchModal={onSwitchModal}
      submitError={submitError}
      button="Sign In"
    />
  );
}
export default Login;
