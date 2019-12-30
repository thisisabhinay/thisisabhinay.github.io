import React from 'react';

const Header = (props) => {
    return(
        <div className="header">
            <img className="header__logo" src={props.logo} />

            <h1 className="header__heading header__heading--primary">
                {props.heading}
            </h1>
            
            <h4 className="header__heading header__heading--secondary">
                {props.subheading}
            </h4>
        </div>
    );
};

export default Header;
