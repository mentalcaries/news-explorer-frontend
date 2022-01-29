import React, { useState }  from 'react';
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
  onSwitchModal,
  submitError
}) {
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
  // const [isNameValid, setIsNameValid] = useState(false)

function handleUsernameChange(evt){
  setUsername(evt.target.value)
  setUsernameErrorMessage(evt.target.validationMessage)
  // setIsNameValid(evt.target.validity.valid)
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
      submitError={submitError}
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
      <span className={`modal__error`} id="username-error">
        {usernameErrorMessage}
      </span>
      
    </ModalWithForm>
  );
}
export default Register;
