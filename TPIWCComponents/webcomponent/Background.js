import MarcaResourceClient from "../boundary/MarcaResourceClient.js";
import ModalDialog from "../webcomponent/ModalDialog.js"

class BackgroundMarca extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        customElements.whenDefined('wc-table').then(_ => {
            let mrc = new MarcaResourceClient();
            mrc.findAll().then((response) => {
                    return response.json();
                })
                .then((data) => {

                    var tabla = document.querySelector("wc-table");
                    tabla.setLista(data);

                })
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

        this.addEventListener("selectedRow",(e)=>{
            let modal=document.querySelector("wc-modal-dialog");
            for(let i=0;i<e.detail.headers.length;i++){
                let p=document.createElement("p");
                p.innerHTML=`${e.detail.headers[i].textContent}:    ${e.detail.source[i].textContent}`;
                modal.appendChild(p);
            }
           
            modal.init();
            modal.toggleVisibility(true);
            
        })

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