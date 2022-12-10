import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from "../../helper/helper";
import Loading from '../../loading/loading';

export default class ClientesCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading: false,
            cliente: {
            nombre:'',
            apellido_p:'',
            apellido_m:'',
            telefono:'',
            email:'',
            direccion:'',
        },
    };
    }
    setValue(inicioe, value) {
        this.setState({
            cliente: {
                ...this.state.empleado,
                [inicioe]: value,
            },
        });
    }
    guardarClientes() {
       this.setState({ loading: true});
       request
       .post('/clientes', this.state.cliente) 
       .then((response) => {
           if(response.data.exito) {
            this.props.changeTab('buscar')
        }
        this.setState({ loading: false});
       })
       .catch((err) => {
        console.error(err);
        this.setState({ loading: true});
       });
    }
    render() {
        return (
            <Container id="clientes-crear-container">
                <Loading show={this.state.loading}/>
                <Row>
                    <h1>Registrar Nuevo Cliente</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('nombre',e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('apellido_p',e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('apellido_m',e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('telefono',e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="email" onChange={(e) => this.setValue ('email',e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('direccion',e.target.value)} />
                        </Form.Group>
                        <Button variant="success" 
                        onClick={() => console.log(this.guardarClientes())} >
                            Registrar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

