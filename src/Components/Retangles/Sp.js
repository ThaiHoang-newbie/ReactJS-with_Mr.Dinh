import React, { Component } from 'react';

class Sp extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card">
                            <img src={this.props.add} width="100px" className="card-img-top" alt="Product Image" />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.discription}</p>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.price}</h6>
                                <a href="#" className="btn btn-primary">{this.props.action}</a>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
        );
    }
}

export default Sp;