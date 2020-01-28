import React,{ Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Car.css';
import Radium from 'radium';

class Car extends Component{

    render(){

        const inputClasses = ['input']

        if( this.props.name !== ''){
            inputClasses.push('green')
        }else{
            inputClasses.push('red')
        }


        const style = {
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .24)',
            ':hover' : {
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .45)',
                cursor: 'pointer'
            }
        };


        return (

            <div className="Car" style={ style }>

                <Card>

                    <Card.Body  style={style}>
                        <Card.Title>{ this.props.name }</Card.Title>
                        <Card.Text>
                            { this.props.year }
                        </Card.Text>
                        <Card.Text >
                            цвет: <strong style={{ color : this.props.color }}>  { this.props.color }</strong>
                        </Card.Text>
                        <input
                            className={inputClasses.join(' ')}
                            type="text"
                            onChange={this.props.onChangeName}
                            style={{ width: '100%' , marginBottom: '20px' }}
                            value={this.props.name}
                        />
                        <Button variant="primary" onClick={this.props.onChangeTitle} className='blue_button'>{ this.props.name } </Button>
                        <Button variant="danger" onClick={this.props.onDelete} className='red_button'>DELETE</Button>
                    </Card.Body>
                </Card>


            </div>
        );
    }

}
export default Radium(Car);