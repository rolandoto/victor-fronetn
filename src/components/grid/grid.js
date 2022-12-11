import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
    Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Row, Col } from "react-bootstrap";
import { request } from "../helper/helper";
import Loading from "../loading/loading";
import "./grid.css"
import { useHistory } from "react-router-dom";
const { SearchBar } = Search;

const products = [
    {   
        _id:1,
        nombre :"ROLANDO",
        apellido_p:"GUERRERO",
        apellido_m:"PRUEBA",
        telefono:"3202720874",
        email:"rolando22_@outlook.com",
        direccion:"calle 54 55 "
    }
  ];

  /*getData() {
    this.setState({ loading: false});
    request
       .get()
       .then((response) => {
         this.setState({ rows:response.data, 
        loading: false });
        console.log(response)
        })
       .catch((error) => {
        this.setState({ loading: false});
         console.log(error);
        });
    console.log(this.state)
}
*/
const DataGrid =() => {
    const [state,setState] =useState()
    const [cliente,setCliente] =useState()
    const [buscar,setBuscar] =useState()
    const history = useHistory()

    useEffect(() =>{
        request.get().then(index =>{
            setState(index.data)
            setCliente(index.data)
        }).catch(e =>{
            console.log(e)
        })
    },[setState])


    const handChnage =(e) =>{
        setBuscar(e.target.value)
        filtrar(e.target.value)
    }
    console.log(cliente)
    const handRemove =(id) =>{
        request.delete({id}).then(index =>{
            window.location.href="/clientes"
            alert("ha sido eliminado exitosamente")
        }).catch(e=>{
            alert("no se pudo eliminar correctamente")
        })
    }

    const handEdit=(e) =>{
       window.location.href =`/clientes/${e}`
    }

    const filtrar=(terminoBusqueda)=>{
        let resultadosBusqueda= cliente.filter((elemento,index)=>{
            if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.apellido_p.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.apellido_m.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.telefono.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.email.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.direccion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())  
            ){
            return elemento;
            }
        });
        setState(resultadosBusqueda);
    }
    

 if(!state) return null

    return (
        <div>
            <input  placeholder="Buscar Clientes" className="buscar" onChange={handChnage}  />
            <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Telefono</th>
            <th>Correo Electronico</th>
            <th>Direccion</th>
            <th>Eliminar</th>
            <th>Editar</th>

        </tr>
        {state.map(index =>(
            <tr>
            <td>{index._id}</td>
            <td>{index.nombre}</td>
            <td>{index.apellido_p}</td>
            <td>{index.apellido_m}</td>
            <td>{index.telefono}</td>
            <td>{index.email}</td>
            <td>{index.direccion}</td>
            <td className="eliminar" onClick={() =>handRemove(index._id)} >Eliminar</td>
            <td className="editar" onClick={() =>handEdit(index._id) } >Editar</td>
        </tr>
        ))}
        
        </table>
</div>
    )

      
}
export default  DataGrid