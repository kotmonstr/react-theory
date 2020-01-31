import React from "react";

class Counter extends React.Component{

    state = {
        counter : 0
    }

    addCount = () =>{
        this.setState({
            counter : this.state.counter + 1
        })
    }

    removeCount = () =>{
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render() {

        return(

                <div>
                    <h1>Counter { this.state.counter }</h1>
                    <button onClick={this.addCount}>+</button>
                    <button onClick={this.removeCount}>-</button>
                </div>


        )
    }

}

export default Counter