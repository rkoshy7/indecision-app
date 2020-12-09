import React from 'react';

class OptionForm extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.option.value;
        if(option){
            this.props.handleAddOption(option);

            e.target.reset();
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

export default OptionForm;