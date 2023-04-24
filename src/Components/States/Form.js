import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name1: "Your name 1",
            name2: "Your name 2",
            class: "" 
        };
    }

    myChangeName1 = (event) => {
        this.setState({ name1: event.target.value });
    }

    myChangeName2 = (event) => {
        this.setState({ name2: event.target.value });
    }

    myChangeClass = (event) => {
        this.setState({ class: event.target.value });
    }


    alert_function = () => {
        alert("Name 1: "+ this.state.name1 + "\nName 2: " + this.state.name2 + "\nClass: " + this.state.class)
    }

   render() {
        return (
            <div>
                <input type='text' value={this.state.name1} onChange={this.myChangeName1} />
                <select onChange={this.myChangeClass}>
                    <option value="24A">24A</option>
                    <option value="24B">24B</option>
                </select>
                <input type='text' value={this.state.name2} onChange={this.myChangeName2} />

                <button onClick={this.alert_function}>Click here to change</button>
            </div>
        );
    }
}

export default Form;
