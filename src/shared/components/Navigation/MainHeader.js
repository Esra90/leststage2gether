import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
    return (
        <header className="main-header">
            {/* props.children is a placeholder for the content you enter between the opening and closing tag by MainNavigator component */}
            {props.children}
        </header>
    )
};


export default MainHeader;

