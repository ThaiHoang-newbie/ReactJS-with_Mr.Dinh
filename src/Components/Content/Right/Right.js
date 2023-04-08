import React, { Component } from 'react';
import ShowCard from './Showcard/Showcard';
import { GetData } from './Showcard/GetData';
class Right extends Component {
    render() {
        console.log(GetData());
        const products = GetData();
        return (
            <div>
                <div id="right-content">
                    <h2>Product : </h2>
                    <div id="products">
                        {
                            products.map(product =>
                                <ShowCard
                                    loai={product.loai}
                                    name={product.name}
                                    image={product.image} />)
                        }
                        <div style={{ clear: 'both' }} />
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}

export default Right;		