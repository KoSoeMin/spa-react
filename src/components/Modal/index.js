import React from 'react'
import './index.css';
import ReactDOM from 'react-dom';

export default function Modal({children, setShowModal}) {
  return (
    ReactDOM.createPortal(
    <div className="modal-component">
      <div className="modal-backdrop">
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {children}
          <button onClick={()=>setShowModal(false)}>close</button>
        </div>
      </div>
    </div>, document.getElementById('modal-root'))
  )
}
