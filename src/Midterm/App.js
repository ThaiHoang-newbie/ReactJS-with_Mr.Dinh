import React, { Component } from 'react';

import AllProduct from './Components/AllProduct';
import Add from './Page/Add';
import Home from './Page/Home';
import Edit from './Page/Edit';
import Delete from './Page/Delete';
import { Routes, Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div class='container'>
                <nav>
                    <ul>
                        <li>
                            <a href='/Home'>Home</a>
                        </li>
                        <li>
                            <a href='/Add'>Add</a>
                        </li>
                    </ul>
                </nav>

                <Routes>    
                    <Route path='/Home' element={<Home></Home>} />
                    <Route path='/Add' element={<Add></Add>} />
                    <Route path="/Edit/:id" element={<Edit></Edit>}/>
                    <Route path="/Delete/:id" element={<Delete></Delete>}/>
                </Routes>
            </div>

        );
    }
}

export default App;