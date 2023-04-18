import React, { Component } from 'react';

class Input_name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Your name"
        };
    }

onChange(e){
    this.setState({name: e.target.value});
}

    render() {
        return (
            <div>
                <input type='text' onChange={this.onChange.bind(this)} value={this.state.name}></input>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Input_name;