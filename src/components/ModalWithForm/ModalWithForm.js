import React from 'react';
import './ModalWithForm.css';

function ModalWithForm({
  name,
  isOpen,
  title,
  onSubmit,
  onClose,
  onOutsideClick,
  children,
}) {
  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__container">
          <button className="modal__close-btn"></button>
          <h2 className="modal__title">Sign in</h2>

          <form action="" className="modal__form" name={name} noValidate>
          <input type="text" className="modal__field" />
          <input type="text" className="modal__field" />
          <button className="modal__submit">Sign In</button>
          </form>
          <p className="modal__text">or Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
