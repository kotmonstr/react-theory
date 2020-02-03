import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Car from "../car/Car";

class CarPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {name: 'Ford', year: '2018',color: 'red'},
                {name: 'Audi', year: '2010',color: 'blue'},
                {name: 'Nissan', year: '2015',color: 'green'},
                {name: 'LADA', year: '2015',color: 'marble'},
                {name: 'LADA', year: '2015',color: 'marble'},
            ],
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

    onChangeName = (name,index)=>{
        const car = this.state.cars[index]; ///то что было
        car.name = name; //  состояние меняем
        const cars = this.state.cars; //весь массив до изменения
        cars[index] = car; // подмен а 2 раз
        this.setState({
            cars
        })
    };

    deleteHandler = (index)=>{
        const cars = this.state.cars.concat();
        cars.splice(index,1);

        this.setState({
                cars
            }

        )
    };

    render() {
        const divStyle = {
            'padding': '20px',
            'margin': '20px'
        };

        const title = this.state.title;

        return (
                <div className="App well" style={divStyle}>
                    <Container>
                        <Row>
                            { this.state.cars.map((car,index)=>{
                                return(
                                    <Col key={index}>
                                        <Car
                                            name={car.name}
                                            year={car.year}
                                            onChangeTitle={this.chancheTitleHandler.bind(this,car.name)}
                                            onChangeName={(event) => this.onChangeName(event.target.value, index)}
                                            onDelete={this.deleteHandler.bind( this, index)}
                                            color={car.color}>
                                        </Car>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </div>
        );
    }
}

export default CarPage;