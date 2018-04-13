class selfComplementary extends  HTMLElement {
  constructor() {
  super();
  }
  connectedCallback () {
    //declaracion de variables de elementos
    let shadowRoot = this.attachShadow({mode:'open', 'composed':true, 'bubbles':true});
    let div = document.createElement('div');
    let search = document.createElement('input');
    let list = document.createElement('datalist');
    //configuracion de atributos
    list.setAttribute('id','list');
    search.setAttribute('type','text');
    search.setAttribute('placeholder','Buscar por...');
    search.setAttribute('list','list');
    //configuracion de tree
    shadowRoot.appendChild(div);
    div.appendChild(search);
    div.appendChild(list);

  //    fetch("http://localhost:8080/MantenimientoMiddleWare-web-1.0-SNAPSHOT/webresources/marca")
  //    .then(response => response.json())
  //    .then(marcas => console.log(marcas));


  }
}
window.customElements.define('self-complementary',selfComplementary);
//export< default selfComplementary;
