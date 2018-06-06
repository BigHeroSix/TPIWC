import MarcaResourceClient from "./MarcaResourceClient.js";
class BackgroundMarca extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        
        var table;
        Promise.all(customElements.whenDefined("paginator-controller"),customElements.whenDefined("vaadin-grid"))
        .then(cumplidas =>{
            let service = new MarcaResourceClient();
            table = document.querySelector('vaadin-grid');
            table.dataProvider = (params, callback) => {
            
            Promise.all(service.findByRange(0,4))
            .then(cumplidas=>{
                cumplidas[0]
                .then(data=>{
                    return data.json;
                })
                .then(jsn=>{
                    callback(jsn,jsn.length)
                })
            })

            }
        });


        this.addEventListener("onpagesize_change",e=>{
            table.dataProvider=(params, callback)=>{
                let data=e.detail.jsonData;
            callback(data,data.length);
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
        
    }
}
customElements.define("background-marca", BackgroundMarca);
export default BackgroundMarca;