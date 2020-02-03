import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Api from './api/Api';
import Counter from "./counter/Counter";
import Layout from "./hoc/Layout/Layout";
import { Route } from 'react-router-dom';
import Menu from "./menu/menu";
import CarPage from "./car-page/car-page";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
              title: 'Kostya Sychev'
        };
    }

    inputHandler = (e)=>{
        this.setState({
            title : e.target.value
        })
    };

    chancheTitleHandler = (title) =>{
       this.setState({
            title :title
        });
    };

    render() {
        const divStyle = {
            'padding': '20px',
            'margin': '20px'
        };

        const title = this.state.title;

        return (

            <Layout>

                <Menu />

                <div className="App well" style={divStyle}>
                    <Container>
                        <Row>
                            <Col><h1> Hello {title} !</h1></Col>

                            <Col>
                                <input type="text" onChange={ this.inputHandler } />
                                <button onClick={this.chancheTitleHandler.bind(this,'mainbutton')}>Change Title</button>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Route path="/" exact  />
                <Route path="/api"  component={Api} />
                <Route path="/counter"  component={Counter} />
                <Route path="/car-page"  component={CarPage} />



            </Layout>

        );
    }
}

export default App;
