class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleVisibilityToggle(){
        console.log(this.state.visibility);
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility)
            }
        });
    }
    render(){
        return (
            <div>
                <h2>Visibility toggle</h2>
                <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>This is some text</p>}
            </div>
        );
    }
}

//ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'));