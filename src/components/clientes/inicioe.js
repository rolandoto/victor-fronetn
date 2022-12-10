import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import "./clientes.css"
import ClientesBuscar from "./crud/buscar"
import ClientesCrear from './crud/crear';

export default class Clientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
        }
    }
    changeTab(tab) {
        this.setState({ currentTab: tab});
    }
    render() {
        return (
            <Container id="clientes-container">
                <Row>
                    <Nav fill variant="tabs"
                        defaultActiveKey="/buscar"
                        onSelect={(eventkey) => this.setState({ currentTab: eventkey})}
                        >
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Buscar Cliente </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Registrar Cliente</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Row>
                <Row>
                {this.state.currentTab === 'buscar' ?
            (<ClientesBuscar /> ) : this.state.currentTab === 'crear' ?
             (<ClientesCrear changeTab={(tab)=> this.changeTab(tab)} /> ):null}
                </Row>
            </Container>
        );
    }
}

