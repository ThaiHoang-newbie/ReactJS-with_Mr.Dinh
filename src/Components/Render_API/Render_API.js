import React, { Component, useEffect } from 'react';
import { useState } from 'react';

function Render_API() {
    const [placeholder, setPlaceholder] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPlaceholder(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <ul>
                {placeholder.map((list, index) => (
                    <li key={index}>
                        {list.id} | {list.name}
                        <br></br>
                        {list.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Render_API;
