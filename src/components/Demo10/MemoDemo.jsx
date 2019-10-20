import React, { Component } from 'react';
import Child from './Child';

// https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent
// class MemoDemo extends Component {
class MemoDemo extends React.PureComponent {
    state = {
        time: new Date()
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render() {
        console.log("render Memo");
        return (
            <div>
                <Child seconds={ 1 }/>
                {this.state.time.toString()}
            </div>
        )
    }
}

export default MemoDemo;
