// import React, { Component } from 'react';

// class Count extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={
//                     () => this.setState(
//                         { count: this.state.count + 1 }
//                     )
//                 }>Count</button>
//             </div>
//         );
//     }
// }

// export default Count;



import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    );
}
export default Count;
