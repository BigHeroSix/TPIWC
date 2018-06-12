import EquipoResourceClient from "../boundary/EquipoResourceClient.js";
import SolicitudResourceClient from "../boundary/SolicitudResourceClient.js";

var idSolicitud;
let erc = new EquipoResourceClient();

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
        };
    }
    document.querySelector("wc-background").addEventListener("selectedRow",(e)=>{
        document.querySelector("#dialogo").opened = true;
    });
});