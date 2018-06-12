import EquipoResourceClient from "../boundary/EquipoResourceClient.js";
import SolicitudResourceClient from "../boundary/SolicitudResourceClient.js";

var idSolicitud;
let erc = new EquipoResourceClient();
let src = new SolicitudResourceClient();

Promise.all([customElements.whenDefined("vaadin-button"),
customElements.whenDefined("vaadin-text-field"),
customElements.whenDefined("wc-table"),
customElements.whenDefined("wc-background")]).then(function () {
    let txtid = document.querySelector("#txtid");
    txtid.focus();
    document.querySelector('#btnid').onclick = function () {
        idSolicitud = txtid.value;
        if (idSolicitud) {
            erc.findAll().then(response => {
                console.dir(response);
                return response.json();
            }).then(data => {
                console.dir(data);
                document.querySelector("wc-table").dataProvider(data);
            });
            src.findById(idSolicitud).then( response=>{
                return response.json();
            }).then( data=>{
                console.dir(data);
                document.querySelector("#txtsolicitante").value = data.solicitante;
                document.querySelector("#txtunidad").value = data.unidad;
                document.querySelector("#txtestado").value = data.estado ? 'aprobada':'rechazada';
            });
        }
    }
    document.querySelector("wc-background").addEventListener("selectedRow",(e)=>{
        document.querySelector("#dialogo").opened = true;
    });
});