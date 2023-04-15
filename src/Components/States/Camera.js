import React, { Component } from 'react';

class Camera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            color: "Red",
            year: 1964
        }
    }

    changeColorYellow = () => {
        this.setState({ color: "yellow" })
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color }}>
                <h1>My {this.state.brand}</h1>
                <p>Color: {this.state.color}</p>
                <button type="button"
                    onClick={this.changeColorYellow}>Yellow</button>
            </div>

        );
    }
}

export default Camera;