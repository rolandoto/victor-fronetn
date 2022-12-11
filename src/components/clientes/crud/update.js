import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import {useParams}  from "react-router-dom"
const UdateClientes =() => {
    const [state,setState] =useState()
    const [loading,setLoading] =useState(false)
    const [nombre,setNombre]=useState()
    const [apellido_p,setApellido_p] =useState()
    const [apellido_m,setPpellido_m] =useState()
    const [telefono,setTelefono] =useState()
    const [email,setEmail]=useState()
    const [direccion,setDireccion] =useState()
    let { id } = useParams();

    let cliente = {
        nombre,
        apellido_p,
        apellido_m,
        telefono,
        email,
        direccion,
    } 


    useEffect(() =>{
        request.get().then(index =>{
            setState(index.data)
        }).catch(e =>{
            console.log(e)
        })
    },[setState])

    const clienEdit = state?.find(index =>index._id == id)

    const handEdit =() =>{
        setLoading(true)
        request.put({id,data:cliente}).then(index =>{
            console.log(index)
            setLoading(false)
            alert("modificado")
            window.location.href="/clientes"
        }).catch(e =>{
            setLoading(false)
            alert("error al modificar")
        })
    }

        return (
            <Container id="clientes-crear-container">
                <Loading show={loading} />
                <Row>
                    <h1>Actualizar datos</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control defaultValue={clienEdit?.nombre}   onChange={(e) =>setNombre(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control defaultValue={clienEdit?.apellido_p} onChange={(e) =>setApellido_p(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control  defaultValue={clienEdit?.apellido_m} onChange={(e) =>setPpellido_m(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control defaultValue={clienEdit?.telefono} onChange={(e) =>setTelefono(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control defaultValue={clienEdit?.email} type="email"  onChange={(e) =>setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control defaultValue={clienEdit?.direccion}  onChange={(e) =>setDireccion(e.target.value)} />
                        </Form.Group>
                        <Button variant="success" 
                          onClick={handEdit} >
                            Actualizar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
}


export default UdateClientes