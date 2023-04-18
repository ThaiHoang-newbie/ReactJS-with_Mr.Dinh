import React, { Component } from "react";
class Fashion_card extends Component {
    render() {
        return (
            <div className="product">
                <img src={this.props.image} alt="" />
                <h3>{this.props.name}</h3>
                <div className="price-row">
                    {this.changePrice() ? (
                        <div>
                            <p>{this.props.price}</p>
                            <p className="old-price"><del>{this.props.oldprice}</del></p>
                        </div>
                    ) : (
                        <div>
                            <p>{this.props.price}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Fashion_card;