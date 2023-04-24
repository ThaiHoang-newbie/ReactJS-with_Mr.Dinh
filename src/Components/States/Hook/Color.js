import React, { useState } from 'react';

function Color() {
    const [color, setColor] = useState("");
    return (
        <div>
            <h1>This is {color} color</h1> 
            <button type="button" onClick={()=> setColor("blue")}>Blue</button>
            <button type="button" onClick={()=> setColor("red")}>Red</button>
            <button type="button" onClick={()=> setColor("yellow")}>Yellow</button>
            <button type="button" onClick={()=> setColor("green")}>Green</button>
        </div>
    )
}

export default Color;
