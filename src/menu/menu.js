import React from "react";
import {Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import Api from "../api/Api";
import Counter from "../counter/Counter";
import Layout from "../hoc/Layout/Layout";

class Menu extends React.Component{


    render() {


        return(

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Theory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/api">Blog</Nav.Link>
                        <Nav.Link href="/counter">Counter</Nav.Link>
                        <Nav.Link href="/car-page">Cars</Nav.Link>
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