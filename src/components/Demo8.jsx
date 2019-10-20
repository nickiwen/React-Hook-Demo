import React, { useState, useEffect } from 'react';

// https://zh-hans.reactjs.org/docs/hooks-rules.html
const Demo8 = () => {
    const [count, setCount] = useState(0)

    // if (count === 0) {
    //     useEffect(() => {
    //         document.title = `You clicked ${count} times`;
    //     })
    // }

    useEffect(() => {
        if (count === 0) {
            document.title = `You clicked ${count} times`;
        }
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}

export default Demo8;