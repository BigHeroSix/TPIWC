import MarcaResourceClient from "./MarcaResourceClient.js";
class selfComplementary extends  HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({mode: 'open'});        
    }

    connectedCallback() {
        //declaracion de variables de elementos
        this.search = document.createElement('input');

        let div = document.createElement('div');
        let list = document.createElement('datalist');
        //configuracion de atributos
        list.setAttribute('id', 'list');
        this.search.setAttribute('id', 'search');
        this.search.setAttribute('type', 'text');
        this.search.setAttribute('placeholder', 'Buscar una marca');
        this.search.setAttribute('list', 'list');



        //configuracion de tree
        this._root.appendChild(div);
        div.appendChild(this.search);
        div.appendChild(list);

        this.search.oninput = _ => {

            list.innerHTML = "";

            let charSequence = this.search.value;
            this.mrc = new MarcaResourceClient();
            if (charSequence !== "") {
                this.mrc.findByNameLike(`${charSequence}?pagesize=5`)
                        .then(response => response.json())
                        .then(marcas => marcas.forEach((value, index) => {
                                let node = document.createElement("OPTION");
                                let textnode = document.createTextNode(value.nombre);
                                node.appendChild(textnode);
                                node.setAttribute("id", value.idMarca);
                                node.setAttribute("name", value.nombre);
                                list.appendChild(node);
                            }));
            }
        };
        
        list.onselect = _ => {
            let evn = new CustomEvent('complete', {'composed': true, 'bubbles': true, 'detail': {marca: response.json}});
            this.dispatchEvent(evn);
        }
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

