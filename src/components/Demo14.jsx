import React from "react";

class Demo14 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });

        // 合并所有的state，在执行异步回调

        this.setState({
            count:this.state.count +1
        },() =>{
            console.log(this.state.count);
        })

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }
    render() {
        const { count } = this.state;
        return (
            <div className="App">
                <h2>count: {count}</h2>
            </div>
        );
    }
}

export default Demo14