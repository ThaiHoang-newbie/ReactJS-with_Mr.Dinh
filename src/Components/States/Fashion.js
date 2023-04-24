import React, { Component } from 'react';
import getFashionData from './Data_fashion';
import Header_fashion from './Header_fashion';
import Fashion_card from './Fashion_card';

class Fashion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: getFashionData(),
            filter: 'all'
        };

        this.changePrice = changePrice.bind(this);

        this.get_child = () => {
            let data_by_type = this.state.products.filter(item => item.category === 'child');
            return data_by_type.map(item => (
                <Fashion_card
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    oldprice={item.oldprice}
                />
            ));
        };

        // other functions

    }

    // other methods

    render() {
        return (
            <div>
                <Header_fashion></Header_fashion>
                <div>
                    <button onClick={this.get_child.bind(this)}>Child</button>
                    <button onClick={this.get_woman.bind(this)}>Woman</button>
                    <button onClick={this.get_man.bind(this)}>Man</button>
                    <button onClick={this.get_all.bind(this)}>All</button>
                </div>
                <div className="fashion-container">
                    {this.state.products.map((product) => (
                        <Fashion_card
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            oldprice={product.oldprice}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Fashion;
