import MarcaResourceClient from "../boundary/MarcaResourceClient.js";
class BackgroundMarca extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        customElements.whenDefined('vaadin-grid').then(_ => {
            const table = document.querySelector('vaadin-grid');
            let marca = new MarcaResourceClient();
            table.dataProvider = (params, callback) => {
                marca.findByRange(0, 4).then(r => {
                    return r.json();
                }).then(data => {
        
                    callback(data, data.length);
                });
            }
        });

        this.addEventListener("complete", (e) => {
            let service = new MarcaResourceClient();
            service.findByNameLike(e.detail.char)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    document.querySelector("auto-complete").setAttribute("options", JSON.stringify(data));
                })
        });

        /* this.addEventListener("WebComponentsReady", (e) => {
            const table = document.querySelector('vaadin-grid');
            let marca = new MarcaResourceClient();
            table.dataProvider = (params, callback) => {
                marca.findByRange(0, 4).then(r => {
                    return r.json();
                }).then(data => {
                    callback(data, data.length);
                });
            }
        }); */
    }
}
customElements.define("background-marca", BackgroundMarca);
export default BackgroundMarca;