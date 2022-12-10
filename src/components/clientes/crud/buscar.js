import React from 'react';
import { Container, Row,  } from 'react-bootstrap';
import "../clientes.css";
import { request } from '../../helper/helper';
import DataGrid from '../../grid/grid';

const columns = [
  {
    dataFild: "_id",
    text: "ID",
  
  },
  {
    dataFild:"nombre",
    text: "Nombre",
  },
  {
    dataFild:"apellido_p",
    text: "Primer Apellido",
  },
  {
    dataFild:"apellido_m ",
    text: "Segundo Apellido",
  },
  {
    dataFild:"telefono ",
    text: "Telefono",
  },
   {
    dataFild:"email",
    text: "Correo Electronico",
  },
  {
    dataFild:"direccion",
    text: "Direccion",
  },
];
export default class ClientesBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }
  componentDiMount() {
    request
     .get(this.props.url)
     .then((response) => {
      console.log(response)
       this.setState({ rows: response.data });
    })
    .catch((error) => {
      console.log(error);
     });
  }
  render() {
    return (
      <Container id="clientes-buscar-container">
        <Row>
          <h1>Buscar Cliente </h1>
        </Row>
        <Row>
        <DataGrid url="/clientes" columns={ columns }  rows={this.state.rows} />
        </Row>
      </Container>
    );
  }
}

