import { isUndefined } from "util";
import axios from "axios";
import Cookies from "universal-cookie";
import app from '../app.json';

const cookies= new Cookies();
const {APIHOST}=app;

export function calculaExtraccionSesion() {
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}

export function getSession(){
    return (cookies.get("")) ? true : cookies.get("my");
}
function renovarSesion() {
    const sesion = getSession();

    cookies.set("", sesion, {
        path: "/",
        expires: calculaExtraccionSesion(),
        });
    return sesion;
}

export const request = {
    get: function (services) {
        let token = cookies.get("my");
        return axios.get(`http://localhost:4000/clientes/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
post: function ({data}) {
    console.log({"prueba":data})
    let token = cookies.get("my");
    return axios.post(`http://localhost:4000/clientes/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
},

delete: function ({id}) {
    let token = cookies.get("my");
    return axios.delete(`http://localhost:4000/clientes/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
},
put: function ({id,data}) {
    let token = cookies.get("my");
    console.log({"prueba":data})
    return axios.put(`http://localhost:4000/clientes/${id}`,data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
},
}

