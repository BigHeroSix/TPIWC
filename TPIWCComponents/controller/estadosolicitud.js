import EquipoResourceClient from "../boundary/EquipoResourceClient.js";

var idSolicitud = 1;
let erc = new EquipoResourceClient();

Promise.all([customElements.whenDefined("vaadin-button"),
customElements.whenDefined("vaadin-text-field")]).then(function () {
    let txtid = document.querySelector("#txtid");
    txtid.focus();
    document.querySelector('#btnid').onclick = function () {
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
});

customElements.whenDefined("wc-table").then(function () {
    let lista = 1;
});