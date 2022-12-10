//direccionamiento
import React from 'react';
import  { BrowserRouter , Switch, Route } from 'react-router-dom';
import Login from "../login/login";
import Inicio from "../index/index";
import PrivateRouter from "../auth/privaterouter";
import Clientes from "../clientes/inicioe";

export default function AppRouter () {
       
     return (
        <BrowserRouter>
            <Switch>
                <Route exact path = {"/"}  component={ Login } />
                <PrivateRouter exact path="/clientes"  component={ Clientes } />
                <Route exact path = {"/"}  component={ Inicio } />
                <Route exact path = {"/index"}  component={ Inicio } />
                <Route  path={'*'}  component={() => (
                    <h1 style={{marginTop: 300}}>
                        404 
                        <br/>
                        Pagina no encontrada 
                        </h1>
                    )} />
            </Switch>
        </BrowserRouter>
   );
               
}









