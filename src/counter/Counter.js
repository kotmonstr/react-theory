import React from "react";
import {Container, Row} from "react-bootstrap";

class Counter extends React.Component {

    state = {
        counter: 0
    }

    addCount = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    removeCount = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {

        return (
            <Container>
                <Row>
                    <h1>Counter {this.state.counter}</h1>
                </Row>
                <Row>
                    <button onClick={this.addCount}>+</button>
                    <button onClick={this.removeCount}>-</button>
                </Row>
            </Container>
        )
    }

}

export default Counter