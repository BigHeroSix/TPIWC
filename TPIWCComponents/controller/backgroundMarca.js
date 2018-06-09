import MarcaResourceClient from "./MarcaResourceClient.js";
class BackgroundMarca extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        


        this.addEventListener("paginatorOnload",(e)=>{
            let table = document.querySelector('wc-table');
            table.dataProvider(e.detail.jsonData);
        });

        this.addEventListener("onpagesize",(e)=>{
            console.log(typeof e.detail);
            console.log("escucho el eventoooo: "+e.detail.jsonData);
            let table = document.querySelector('wc-table');
            table.dataProvider(e.detail.jsonData);
        });

        addEventListener("selectedRow",(e)=>{
            let modal=document.querySelector("wc-modal-dialog");
            for(let i=0;i<e.detail.headers.length;i++){
                let p=document.createElement("p");
                p.innerHTML=`${e.detail.headers[i].textContent}:     ${e.detail.source[i].textContent}`;
                modal.appendChild(p);
            }
           
            modal.init();
            modal.toggleVisibility(true);
            
        });

       /* this.addEventListener("complete", (e) => {
            let service = new MarcaResourceClient();
            service.findByNameLike(e.detail.char)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    document.querySelector("auto-complete").setAttribute("options", JSON.stringify(data));
                })
        });
        /*this.addEventListener("WebComponentsReady",(e) => {
            const table = document.querySelector('vaadin-grid');
            let marca = new MarcaResourceClient();
            table.dataProvider = (params, callback) => {
                marca.findByRange(0, 4).then(r => {
                   return r.json();
                }).then(data => {
                    callback(data,data.length);
                });
            }
        });*/
    }

  
}
customElements.define("background-marca", BackgroundMarca);
export default BackgroundMarca;