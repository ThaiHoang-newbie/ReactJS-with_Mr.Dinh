import React, { Component } from 'react';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bui Van Teo",
            age: 25
        };
    }

    render() {
        return (
            <div>
                <h2>Name: {this.state.name}</h2>
                <p>Tuoi: {this.state.age}</p>

                {this.state.age > 50 ? (
                    <p>Gia!</p>
                ) : (
                    <p>Tre!</p>
                )}
                
            </div>
        );
    }
}

export default Member;
