import React, { Component } from 'react';

class Input_name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Your name"
        };
    }

    myChange = (event) => {
        this.setState({ name: event.target.value });
    }
    

    render() {
        return (
            <div>
                <input type='text' onChange={this.myChange.bind(this)} value={this.state.name}></input>
                <p>This is your entered: {this.state.name}</p>
            </div>
        );
    }
}

export default Input_name;