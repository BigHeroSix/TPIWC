import MarcaResourceClient from "./MarcaResourceClient.js";
class selfComplementary extends  HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({mode: 'open'});
        this.response;        
    }

    connectedCallback() {
        //declaracion de variables de elementos
        this.search = document.createElement('input');

        this.div = document.createElement('div');
        this.list = document.createElement('datalist');
        //configuracion de atributos
        this.list.setAttribute('id', 'list');
        this.search.setAttribute('id', 'search');
        this.search.setAttribute('type', 'text');
        this.search.setAttribute('placeholder', 'Buscar una marca');
        this.search.setAttribute('list', 'list');



        //configuracion de tree
        this._root.appendChild(this.div);
        this.div.appendChild(this.search);
        this.div.appendChild(this.list);

        this.search.oninput = _ => {

            this.list.innerHTML = "";

            this.charSequence = this.search.value;
            this.mrc = new MarcaResourceClient();
            if (this.charSequence !== "") {
                this.mrc.findByNameLike(`${this.charSequence}?pagesize=5`)
                        .then(response => response.json())
                        .then(marcas => {marcas.forEach((value, index) => {
                                let node = document.createElement("OPTION");
                                let textnode = document.createTextNode(value.nombre);
                                node.appendChild(textnode);
                                node.setAttribute("id", value.idMarca);
                                node.setAttribute("name", value.nombre);
                                this.list.appendChild(node);

                            });
                          this.response=marcas;}
                        );
            }
        };
        
        this.search.onchange = _ => {
//          let marcaSelected=this.response.find(e => {
//            e.name === this.search.value;
//          });
          console.log("se selecciono "+ this.response);
            this.evn = new CustomEvent('complete', {'composed': true, 'bubbles': true, 'detail': {'marca': this.search.value}});
            this.dispatchEvent(this.evn);
        };
    }
}
//    realizado() {
//        if (this.querySelector("#search") !== "") {
//            let evn = new CustomEvent('complete', {'composed': true, 'bubbles': true, 'detail': {name: 'it work'}});
//            this.dispatchEvent(evn);
//        }
//    }

customElements.define('self-complementary', selfComplementary);

export default selfComplementary;

