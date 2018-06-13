import MarcaResourceClient from "../boundary/MarcaResourceClient.js";
import ModalDialog from "../webcomponent/ModalDialog.js"

class Background extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.addEventListener("countSetter", e => {
            let pag = document.querySelector("paginator-controller");
            pag._count = e.detail.count;
        })

        this.addEventListener("paginatorOnload", (e) => {
            let table = document.querySelector('#' + e.detail.id);
            console.log(e.detail.id);

            table.dataProvider(e.detail.jsonData);
        });

        this.addEventListener("onpagesize", (e) => {
            let table = document.querySelector('#' + e.detail.id);
            table.dataProvider(e.detail.jsonData);
        });

        //addEventListener("selectedRow", (e) => {
        //  let modal = document.querySelector("wc-modal-dialog");
        //for (let i = 0; i < e.detail.headers.length; i++) {
        //  let p = document.createElement("p");
        //p.innerHTML = `${e.detail.headers[i].textContent}:     ${e.detail.source[i].textContent}`;
        // modal.appendChild(p);
        //}

        //modal.init();
        //modal.toggleVisibility(true);

        //});

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
customElements.define("wc-background", Background);
export default Background;
