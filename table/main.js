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
}

    
export default this;
