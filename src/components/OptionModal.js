import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal isOpen={!!props.selectedOption} contentLabel="selected option is">
            <h1>Selected option is</h1>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleSelectedOption}>Okay</button>
        </Modal>
    );

export default OptionModal;