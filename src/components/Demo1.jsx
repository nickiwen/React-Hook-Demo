// import React from "react"

// export default class Demo1 extends React.Component{
//     render(){
//         return(
//             <div>
//                 Hello React Hook
//             </div>
//         )
//     }
// }


// -----------------

import React,{ useState } from "react"

function Demo1(){

    const [count,setCount] = useState(0)

    return(
        <div>
            Hello React Hook:{ count }
            <button onClick={() => setCount(count+1) }>Add</button>
        </div>
    )
}
export default Demo1
