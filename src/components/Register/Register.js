import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './Register.css';

function Register({
  isOpen,
  onSubmit,
  onClose,
  onOutsideClick,
  setEmail,
  email,
  setPassword,
  password,
  username,
  setUsername,
  onSwitchModal
}) {

function handleUsernameChange(evt){
  setUsername(evt.target.value)
}

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
      userOption="Sign in"
      onSwitchModal={onSwitchModal}
      button="Sign Up"
    >
      <p className="modal__label">Username</p>
      <input
        type="text"
        name="username"
        className="modal__field"
        placeholder="Enter your username"
        required
        onChange={handleUsernameChange}
        value={username}
      />
      <span className={`modal__error`} id="password-error">
        This field is required
      </span>
    </ModalWithForm>
  );
}
export default Register;
