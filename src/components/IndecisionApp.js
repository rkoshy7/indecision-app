import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionForm from './OptionForm';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: [],
            selectedOption: undefined
        };
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleSelectedOption = this.handleSelectedOption.bind(this);
    }
    handlePick(){
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];

        this.setState((prevState) => {
            return {
                selectedOption: option
            }
        });
    }
    handleRemoveOptions(){
        this.setState(() => ({ options: [] }));
    }
    handleAddOption(option){
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    handleSelectedOption(){
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        });
    }
    render(){
        return (
            <div>
                <Header title="Indecision App" />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleRemoveOptions={this.handleRemoveOptions} /> 
                <OptionForm handleAddOption={this.handleAddOption} />   
                <OptionModal selectedOption={this.state.selectedOption} handleSelectedOption={this.handleSelectedOption} />             
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;