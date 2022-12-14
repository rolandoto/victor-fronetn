import React from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import './navbar.css'
import Cookies from "universal-cookie";

const  Menu =()=>  {
    const cookies= new Cookies();
    const handClode =() =>{
        cookies.remove("my")  
        window.location.href="/"
    }
        return (

            <><Navbar fixed="top" bg="success" variant="dark" id="navbar">
                <Container>
                    <Navbar.Brand href="#home">THE KING BARBER SHOP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Quienes Somos</Nav.Link>
                        <Nav.Link href="#/features">Valores</Nav.Link>
                    </Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Usuario
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={handClode} >Cerrar Sesion</Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar></>
        );
}

export default Menu

