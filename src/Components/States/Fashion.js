import React, { Component } from 'react';
import getFashionData from './Data_fashion';
import Header_fashion from './Header_fashion';
import Fashion_card from './Fashion_card';

class Fashion extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                name: "Child 1",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AcyWm6u6m01kAMIefsxoLJPRyyyxyTtJkw&usqp=CAU",
                category: "child"
            },
            {
                name: "Woman 1",
                image: "https://static.fibre2fashion.com//articleresources/images/87/8609/fashion%20women-small_Small.jpg",
                loai: "woman"
            },
            {
                name: "Man 1",
                image: "https://i.insider.com/54fdc12decad042920ceb0c8?width=800&format=jpeg",
                loai: "man",
                price: 100,
                oldprice: 67
            }
            , {
                name: "Woman 2",
                image: "https://media.istockphoto.com/id/1259705254/photo/stylish-fashionable-blonde-woman-with-smoky-eye-makeup-in-jeans-white-t-shirt-and-black.jpg?s=612x612&w=0&k=20&c=jsfMFnIiaVZdxPg933bLGn1J3RVqqzFhycWeY0ZBJ18=",
                loai: "woman"
            }
            , {
                name: "Man 2",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxbGpeaz1LeeAgXpXQZdSOzP1zFwXPSHvng&usqp=CAU",
                loai: "man",
                price: 100,
                oldprice: 67
            }
            , {
                name: "Child 2",
                image: "https://img.freepik.com/free-photo/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_155003-21555.jpg?w=360",
                loai: "child",
                price: 100,
                oldprice: 67
            }
        ];


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

        this.get_man = () => {
            let data_by_type = this.state.products.filter(item => item.category === 'man');
            return data_by_type.map(item => (
                <Fashion_card
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    oldprice={item.oldprice}
                />
            ));
        };
        this.get_woman = () => {
            let data_by_type = this.state.products.filter(item => item.category === 'woman');
            return data_by_type.map(item => (
                <Fashion_card
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    oldprice={item.oldprice}
                />
            ));
        };
        this.get_all = () => {
            return this.state.products.map(item => (
                <Fashion_card
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    oldprice={item.oldprice}
                />
            ));
        };
    }

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