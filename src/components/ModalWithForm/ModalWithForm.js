import React from 'react';
import { useState, useRef, useEffect } from 'react/cjs/react.development';
import './ModalWithForm.css';

function ModalWithForm({
  title,
  isOpen,
  onSubmit,
  onClose,
  onOutsideClick,
  setEmail,
  email,
  setPassword,
  password,
  children,
  userOption,
  onSwitchModal,
  button,
  submitError
}) {

  const [emailErrorMessage, setEmailErrorMesage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMesage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = React.createRef();

  useEffect(()=>{
    setIsFormValid(formRef.current.checkValidity())
  },[formRef])

  function handleEmailChange(evt){
    setEmail(evt.target.value)
    setEmailErrorMesage(evt.target.validationMessage)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    setPasswordErrorMesage(evt.target.validationMessage)
  }

  function handleFormSubmit(evt){
    evt.preventDefault()
    onSubmit()

  }


  return (
    <div className={`modal ${isOpen? 'modal_opened': ''}`} >
      <div className="modal__overlay" onClick={onOutsideClick}>
        <div className="modal__container">
          <button onClick={onClose} className="modal__close-btn"></button>
          <h2 className="modal__title">{title}</h2>

          <form action="" className="modal__form"  noValidate onSubmit={handleFormSubmit} ref={formRef} >
            <p className="modal__label" type="email" name="email">
              Email
            </p>
            <input
              type="email"
              className="modal__field"
              placeholder="example@test.com"
              required
              onChange={handleEmailChange}
              value={email}
            />
            <span className={`modal__error`} id="email-error" >{emailErrorMessage} </span>

            <p className="modal__label">Password</p>
            <input
              type="password"
              name="password"
              className="modal__field"
              placeholder="••••••••••••"
              required
              onChange={handlePasswordChange}
              value={password}
              minLength={8}
            />
            <span className={`modal__error`} id="password-error" >{passwordErrorMessage}</span>
              {children}
              <span className={`modal__error modal__error_submit`} id="signup-error" >{submitError}</span>
            <button className={`modal__submit ${isFormValid? '' :'modal__submit_disabled'}`} disabled={isFormValid? false: true}>{button}</button>
          </form>
          <p className="modal__text">or <span onClick={onSwitchModal} className="modal__span">{userOption}</span></p>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
