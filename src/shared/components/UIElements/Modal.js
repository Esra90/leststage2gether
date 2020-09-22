import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './BackDrop';
import './Modal.css';

const ModalOverlay = props => {
    const content = (
        // I can also add my own classes to be more flexible. (dynamic classes)
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form
                onSubmit={
                // make sure if I render any buttons inside of that button, don't want to reload the page accidentally 
                props.onSubmit ? props.onSubmit : event => event.preventDefault()
                }
            >
                <div className={`modal__content ${props.contentClass}`}>
                {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
                </footer>
            </form>
        </div>
  );
    return  ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
    return (
      <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition
          in={props.show}
          mountOnEnter
          unmountOnExit
          timeout={200}
          classNames="modal"
        >
          <ModalOverlay {...props} />
        </CSSTransition>
      </React.Fragment>
    );
  };
  
  export default Modal;






