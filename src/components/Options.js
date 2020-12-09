import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <button onClick={props.handleRemoveOptions}>Remove All</button>
            {
                props.options.map((option, index) => <Option option={option} key={index} />)
            }
        </div>        
    );

export default Options;