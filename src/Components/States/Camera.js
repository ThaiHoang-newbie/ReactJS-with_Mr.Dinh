import React, { Component } from 'react';

import getData from './Data';

class Camera extends Component {

    constructor(props) {
        var arr = getData();
        super(props);
        this.state = { arr };
    }


    render() {
        return (
            <div>
                {
                    this.state.arr.map(val =>
                        <div>
                            <h1>{val.name}</h1>
                            <img src={val.image}></img>
                            <h2>{val.category}</h2>
                        </div>
                    )
                }
            </div>

        );
    }
}

export default Camera;