import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <label>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                </label>
            </div>
        );
    }
}

export default Item;