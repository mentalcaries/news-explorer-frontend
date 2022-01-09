import React from 'react';
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
  onSwitchModal
}) {

  function handleEmailChange(evt){
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }


  return (
    <div className={`modal ${isOpen? 'modal_opened': ''}`} >
      <div className="modal__overlay" onClick={onOutsideClick}>
        <div className="modal__container">
          <button onClick={onClose} className="modal__close-btn"></button>
          <h2 className="modal__title">{title}</h2>

          <form action="" className="modal__form"  noValidate onSubmit={onSubmit}>
            <p className="modal__label" type="email" name="email">
              Email
            </p>
            <input
              type="text"
              className="modal__field"
              placeholder="example@test.com"
              required
              onChange={handleEmailChange}
              value={email}
            />
            <span className={`modal__error`} id="email-error" >Error Message</span>

            <p className="modal__label">Password</p>
            <input
              type="password"
              name="password"
              className="modal__field"
              placeholder="••••••••••••"
              required
              onChange={handlePasswordChange}
              value={password}
            />
            <span className={`modal__error`} id="password-error" >Password required</span>
              {children}

            <button className="modal__submit">{userOption}</button>
          </form>
          <p className="modal__text">or <span onClick={onSwitchModal} className="modal__span" style={{color:"red", cursor:"pointer"}}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
