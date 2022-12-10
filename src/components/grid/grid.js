import React from "react";
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

export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            rows: [],
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
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
    render() {
      
        const options = {
            custom: true,
            totalSize: this.state.rows.length,
        };
        console.log(this.state)
        return (
            <>
            <Loading show={this.state.loading}/>
            <ToolkitProvider
            keyField="tp"
            columns={this.props.columns}
            data={products}
            search
            >
                {(props) => (
                    <>
                        <hr />
                        <PaginationProvider pagination={paginationFactory(options)}>
                            {({ paginationProps, paginationTableProps }) => (
                                <>
                                    <Row>
                                      <Col>
                                        <SizePerPageDropdownStandalone {...paginationProps} />
                                      </Col>
                                      <Col>
                                        <SearchBar {...props.searchProps} />
                                      </Col>
                                    </Row>

                                    <BootstrapTable
                                        keyField="bt"
                                        data={products}
                                        columns={this.props.columns}
                                        {...paginationTableProps}
                                        {...props.baseProps}
                                    />
                                    <PaginationListStandalone {...paginationProps} />
                                </>
                            )}
                        </PaginationProvider>
                    </>
                )}
            </ToolkitProvider>
            </>
        );
    }
}