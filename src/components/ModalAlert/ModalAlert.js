import React from "react";
import './ModalAlert.css'

function ModalAlert({isOpen, onClose, onOutsideClick}){
  return(
<div className={`modal-alert ${isOpen? 'modal-alert_opened': ''}`} >
      <div className="modal-alert__overlay" onClick={onOutsideClick}>
        <div className="modal-alert__container">
          <button onClick={onClose} className="modal-alert__close-btn"></button>
          <h2 className="modal-alert__title">Registration successfully completed</h2>

          
          <p className="modal-alert__text">Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default ModalAlert;