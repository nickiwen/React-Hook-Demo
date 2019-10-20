// import React, { useState, useEffect } from 'react';

// class Demo5 extends React.Component {

//     state = {
//         count: 0,
//         name:"iwen"
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.count !== this.state.count){
//             console.log(111);
//             document.title = `You clicked ${this.state.count} times`;
//         }
//     }

//     clickCountHandler = () => {
//         this.setState({
//             count: this.state.count += 1
//         })
//     }

//     clickNameHandler = () =>{
//         this.setState({
//             name:"ime"
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <p>{ this.state.name }</p>
//                 <button onClick={ this.clickCountHandler }>Click me</button>
//                 <button onClick={ this.clickNameHandler }>Click me</button>
//             </div>
//         );
//     }
// }

// export default Demo5;

// ------------

import React, { useState, useEffect } from 'react';

const Demo5 = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("iwen")

    useEffect(() => {
        console.log(`render ${count}`);
        document.title = `You clicked ${count} times`;
    }, [count]) // 

    useEffect(() => {
        console.log("render name");
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <div>
                <button onClick={() => setName("ime")}>Click me</button>
            </div>
        </div>
    );
}

export default Demo5;