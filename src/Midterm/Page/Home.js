import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import AllProduct from '../Components/AllProduct';

const Home = () => {
    return (
        <div>
            <AllProduct></AllProduct>
        </div>
    )
}
export default Home;