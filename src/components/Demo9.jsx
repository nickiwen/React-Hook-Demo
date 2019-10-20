import React, { Component, useEffect, useState } from 'react';

const MyAPI = {
    count: 0,
    subscribe(cb) {
        this.intervalId = setInterval(() => {
            this.count += 1;
            cb(this.count);
        }, 1000);
    },
    unsubscribe() {
        clearInterval(this.intervalId);
        this.reset();
    },
    reset() {
        this.count = 0;
    },
};

// export default class Demo9 extends Component {
//     state = {
//         count:0
//     }

//     componentDidMount(){
//         MyAPI.subscribe(count =>{
//             this.setState({
//                 count:count
//             })
//         })
//     }

//     componentWillUnmount(){
//         MyAPI.unsubscribe()
//     }

//     render(){
//         return(
//             <div>
//                 { this.state.count }
//             </div>
//         )
//     }
// }

const Demo9 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        MyAPI.subscribe(currentCount => {
            setCount(currentCount)
        })
        return () =>{
            MyAPI.unsubscribe();
        }
    },[])

    return (
        <div>
            {count}
        </div>
    )
}

export default Demo9