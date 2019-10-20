import React, { useState, useCallback } from 'react';

// https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback

const Demo11 = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const clickHandler = useCallback(
        () => {
            setCount(count+1)
        },
        [count]
    )

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={clickHandler}>Click me</button>

            <p>You clicked {count1} times</p>
            <button onClick={useCallback(() => setCount1(count1 + 1), [count])}>Click me</button>
        </div>
    )
}

export default Demo11