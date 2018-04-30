class Column extends HTMLElement{
constructor(){
    super();
}

get header(){
    this.getAttribute("header");
}

get property(){
    this.getAttribute("property");
}

connectedCallback(){
let ran=document.createElement("th");
let dom=document.createTextNode("Raw");
let ran=document.createElement("tr");
ran.appendChild(dom);
this.appendChild(ran);
}

}
customElements.define('column-table',Column);
export default Column;