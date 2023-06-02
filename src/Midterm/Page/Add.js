import React, { useState, useEffect } from 'react';
import axios from 'axios';


var jsonObject = 'http://localhost:3000/products';
var keyCount = Object.keys(jsonObject).length;

const Add = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
        color: '',
        name_category: '',
        material: '',
        expiry_date: '',
        origin: '',
        description: '',
        tinhtranghang: true,
        id: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    useEffect(() => {
        const fetchProductCount = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                const products = response.data;
                const count = products.length;
                setNewProduct((prevProduct) => ({
                    ...prevProduct,
                    id: String(count + 1),
                }));
            } catch (error) {
                console.error('Error fetching product count:', error);
            }
        };
        fetchProductCount();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/products', newProduct);
            setNewProduct({
                name: '',
                price: '',
                image: '',
                color: '',
                name_category: '',
                material: '',
                expiry_date: '',
                origin: '',
                description: '',
                tinhtranghang: true,
                id: keyCount + 1,
            });

            alert('Product added successfully!');
            setTimeout(() => {
                window.location = 'http://localhost:3001/Home';
            }, 1000);
        } catch (error) {
            alert('Error adding product:', error);
        }
    };

    return (
        <div>
            <h1>Add new pro</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Image:
                    <input
                        type="text"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Color:
                    <input
                        type="text"
                        name="color"
                        value={newProduct.color}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Category:
                    <input
                        type="text"
                        name="name_category"
                        value={newProduct.name_category}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Material:
                    <input
                        type="text"
                        name="material"
                        value={newProduct.material}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Expiry Date:
                    <input
                        type="text"
                        name="expiry_date"
                        value={newProduct.expiry_date}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Origin:
                    <input
                        type="text"
                        name="origin"
                        value={newProduct.origin}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Add;
