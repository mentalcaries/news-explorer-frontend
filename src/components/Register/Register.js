import React from 'react';
import { useState } from 'react/cjs/react.development';
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

  const [isNameValid, setIsNameValid] = useState(false)

function handleUsernameChange(evt){
  setUsername(evt.target.value)
  setIsNameValid(evt.target.validity.valid)
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
      isNameValid={isNameValid}
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
