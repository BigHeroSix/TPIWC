class SelfComplementary extends HTMLElement {
    constructor() {
        super();
        this.root=this.attachShadow({mode: 'open'});
    }
    
    get path(){
        return this.getAttribute("path");
    }
    
    
    connectedCallback() {
        //declaracion de variables de elementos
        let div = document.createElement('div');
        let search = document.createElement('input');
        let list = document.createElement('datalist');
        //configuracion de atributos
        list.setAttribute('id', 'list');
        search.setAttribute('id', 'search');
        search.setAttribute('type', 'text');
        search.setAttribute('placeholder', 'Buscar por...');
        search.setAttribute('list', 'list');
        search.onkeypress=_=>event;
        //configuracion de tree
        div.appendChild(search);
        div.appendChild(list);
                this.root.appendChild(div);


//            fetch("http://localhost:8080/MantenimientoMiddleWare-web-1.0-SNAPSHOT/webresources/marca")
//            .then(response => response.json())
//            .then(marcas => console.log(marcas));
                
    }

    event(){
        console.log("aquiiii");
       if(document.querySelector("#search").value!==null){
           let evn=new CustomEvent('complete',{'composed':true,'bubbles':true,'detail':{ name:'it work'}});
           this.dispatchEvent(evn);
    }
    
    
    
}
}
        window.customElements.define('auto-complete',SelfComplementary);

export default SelfComplementary;
