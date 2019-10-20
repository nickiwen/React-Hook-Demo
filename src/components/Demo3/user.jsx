// import React, { Component } from 'react';

// const userSet = ["张三","李四","王五","赵刘"];

// class UserGenerator extends Component {
//   state = {
//     user: userSet[0]
//   }

//   generateUser = () => {
//     let randomIndex = Math.floor(Math.random() * userSet.length);
//     let randomUser = userSet[randomIndex];

//     this.setState({
//         user: randomUser
//     })
//   }

//   render() {
//     return (
//       <div>
//         <span className="emoji" role="img" aria-label="emoji">
//           { this.state.user }
//         </span>
//         <button className="medium-btn" onClick={ this.generateUser }>
//           Generate
//         </button>
//       </div>
//     )

//   }
// }

// export default UserGenerator;

import React, { useState } from 'react';

const userSet = ["张三", "李四", "王五", "赵刘"];
const UserGenerator = () => {
    const [user, setUser] = useState(userSet[0]);

    const generateUser = () => {
        let randomIndex = Math.floor(Math.random() * userSet.length);
        let randomUser = userSet[randomIndex];
        setUser(randomUser)
    }

    return (
        <div>
            <span className="emoji" role="img" aria-label="emoji">
                {user}
            </span>
            <button className="medium-btn" onClick={generateUser}>
                Generate
          </button>
        </div>
    )
}

export default UserGenerator