import React, { useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from "../../helper/helper";
import Loading from '../../loading/loading';

const ClientesCrear =() => {
    const [loading,setLoading] =useState(false)
    const [nombre,setNombre]=useState()
    const [apellido_p,setApellido_p] =useState()
    const [apellido_m,setPpellido_m] =useState()
    const [telefono,setTelefono] =useState()
    const [email,setEmail]=useState()
    const [direccion,setDireccion] =useState()

    let cliente = {
        nombre,
        apellido_p,
        apellido_m,
        telefono,
        email,
        direccion,
    } 

    const handSubmit =() =>{
        setLoading(true)
        request.post({data:cliente}).then(index =>{
            console.log(index)
            setLoading(false)
            alert("guardado")
            window.location.href="/clientes"
        }).catch(e =>{
            setLoading(false)
            alert("error al guardar")
        })
    }

    
    
        return (
            <Container id="clientes-crear-container">
                <Loading show={loading} />
                <Row>
                    <h1>Registrar Nuevo Cliente</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control  onChange={(e) =>setNombre(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control onChange={(e) =>setApellido_p(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control  onChange={(e) =>setPpellido_m(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange={(e) =>setTelefono(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="email"  onChange={(e) =>setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control   onChange={(e) =>setDireccion(e.target.value)} />
                        </Form.Group>
                        <Button variant="success" 
                          onClick={handSubmit} >
                            Registrar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
}


export default ClientesCrear