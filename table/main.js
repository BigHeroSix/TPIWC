import MarcaResourceClient from '../controller/MarcaResourceClient.js';

window.onload = function () {
    let mrc = new MarcaResourceClient();
    mrc.findAll().then((response) => {
        return response.json();
    })
        .then((data) => {

            var tabla = document.querySelector("wc-table");
            tabla.setLista(data);

        })

    /*var listafake = [{ "codigoCorrelativo": "123456789", "idEquipo": 4, 
    "idModelo": { "activo": true, "idModelo": 1, "nombre": "Dell XPS", "lista":{"campo1":"valor1","campo2":"valor2"} }, 
    "idUnidad": { "idUnidad": 1, "nombre": "FMOcc" } }, 
    { "codigoCorrelativo": "987654321", "idEquipo": 6, 
    "idModelo": { "activo": true, "idModelo": 1, "nombre": "Dell XPS", "lista":{"campo1":"valor1","campo2":"valor2"} }, 
    "idUnidad": { "idUnidad": 1, "nombre": "FMOcc" } }, 
    { "codigoCorrelativo": "759849393", "idEquipo": 7, 
    "idModelo": { "activo": true, "idModelo": 2, "nombre": "HP pavilion 14", "lista":{"campo1":"valor1","campo2":"valor2"} }, 
    "idUnidad": { "idUnidad": 1, "nombre": "FMOcc" } }];
    //var tabla = document.querySelector("wc-table");
    //tabla.setLista(listafake);
    */
}

export default this;
