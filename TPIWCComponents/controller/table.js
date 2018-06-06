import MarcaResourceClient from "./MarcaResourceClient.js";

customElements.whenDefined('vaadin-grid').then(_ => {
    const table = document.querySelector('vaadin-grid');
    let marca = new MarcaResourceClient();
    table.dataProvider = (params, callback) => {
        marca.findByRange(0, 4).then(r => {
           return r.json
        }).then(data => {
            callback(data,data.length);
        });
    }
});