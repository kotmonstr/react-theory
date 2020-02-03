import React from "react";
import {Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Menu extends React.Component{

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Theory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" className="nav-link" >Home</NavLink>
                        <NavLink to="/api" className="nav-link">Blog</NavLink>
                        <NavLink to="/counter" className="nav-link">Counter</NavLink>
                        <NavLink to="/car-page" className="nav-link">Cars</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Menu