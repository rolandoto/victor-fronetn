import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaExtraccionSesion, getSession } from '../helper/helper';
import app from '../app.json';
import Loading from '../loading/loading';
import {useHistory,useLocation} from "react-router-dom"

const {APIHOST}=app;
const cookies = new Cookies();

/*iniciarSesion(){
    console.log(this.state)
    this.setState({ loading: true});
    axios.post(`http://localhost:4000/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
    } 
    )
    .then((response) =>{
        if((response.data.token)){
            alert('Usuario y/o Contraseña Invalido');
        }else{
            cookies.set('_s', response.data.token, {
                path: '/',
                expires: calculaExtraccionSesion(),
            }); 
            this.props.history.push('/clientes');
        }
        this.setState({ loading: false});
    })
    .catch((err) =>{
        console.log(err);
        this.setState({ loading: false});
    });
}

*/

 const  Login =() =>  {
   
    
    const history = useHistory()
    const [usuario,setUsuario] =useState()
    const [pass,setPass] =useState()
    const [loading,setLoading] =useState(false)


    const  hand =async() =>{
        setLoading(true)
        try {
            setLoading(true)
            axios.post(`http://localhost:4000/usuarios/login`, {
                usuario:usuario,
                pass: pass,
            }).then(index =>{
                setLoading(false)
                console.log(index)
                cookies.set('my', index.data.token, {
                    path: '/',
                    expires: calculaExtraccionSesion(),
                }); 
               setTimeout(() =>{
                    window.location.href="/clientes"
               },2000 )
            }).catch(e =>{
                console.log(e)
                alert("error")
                setLoading(false)
            })
        } catch (error) {
            setLoading(false)
            console.log("error de conexion")
        }
    }

  
        return (
            <Container id="login-Container">
                <Loading  show={loading}  />
                <Row>
                    <Col
                    sm="12"
                    xs="12"
                    md={{ span: 4, offset:4}}
                    lg={{ span: 4, offset:4}}
                    lx={{ span: 4, offset:4}}
                    >
                        <Row>                    
                            <h2>Iniciar Sesion</h2>
                        </Row>
                        <Row>
                         <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label  >Usuario o Correo</Form.Label>
                                <Form.Control  onChange={(e)=> setUsuario(e.target.value)}  />
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label  >Contrasena</Form.Label>
                                <Form.Control type="password"  onChange={(e) => setPass(e.target.value)}  />
                             
                            </Form.Group>
                                <Button variant="success" type="submi" 
                                onClick={(e)=>{
                                    e.preventDefault()
                                    hand()
                                }}
                                >
                                 Ingresar
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        );
    }

export default Login