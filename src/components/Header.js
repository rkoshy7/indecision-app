import React from 'react';

const Header = (props) => (
        <div className="header">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Test'
}

export default Header;