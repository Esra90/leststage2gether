// // for the mobile view -navbar on mobile view
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      // added or removed from the DOM depending on its state
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  // I can render this component in drawer-hook div now
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
  
};

export default SideDrawer;

