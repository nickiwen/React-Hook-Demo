import React, { createContext } from 'react';

const ThemeContext = createContext()


class Demo15 extends React.Component {
    state = {
        theme: 'red',
    }

    render() {
        const { theme } = this.state
        return (
            <div>
                <ThemeContext.Provider value={theme}>
                    <Middle></Middle>
                </ThemeContext.Provider>
            </div>
        )
    }
}


class Middle extends React.Component {
    render() {
        return (
            <div>
                <Bottom></Bottom>
            </div>
        )
    }
}

// class Bottom extends React.Component {

//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {
//                     theme => <h1>ThemeContext 的 值为 {theme}</h1>
//                 }
//             </ThemeContext.Consumer>
//         )
//     }
// }

class Bottom extends React.Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context
        return (
            <div>
                <h1>ThemeContext 的 值为 {theme} </h1>
            </div>
        )
    }
}


export default Demo15