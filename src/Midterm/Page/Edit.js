import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: '',
        color: '',
        name_category: '',
        material: '',
        expiry_date: '',
        origin: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:3000/products/${id}`, product);
            setProduct({
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
                id: 0,
            });

            alert('Product edited successfully!');

            setTimeout(() => {
                window.location = 'http://localhost:3001/Home';
            }, 1000);
        } catch (error) {
            console.log('Error adding product:', error);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Image:
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Color:
                    <input
                        type="text"
                        name="color"
                        value={product.color}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Category:
                    <input
                        type="text"
                        name="name_category"
                        value={product.name_category}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Material:
                    <input
                        type="text"
                        name="material"
                        value={product.material}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Expiry Date:
                    <input
                        type="text"
                        name="expiry_date"
                        value={product.expiry_date}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Origin:
                    <input
                        type="text"
                        name="origin"
                        value={product.origin}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default Edit;
