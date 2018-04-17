import MarcaResourceClient from "./MarcaResourceClient.js";
class DetailsMarca extends  HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {

    	this.div = document.createElement('div');

    	this.txtID = document.createElement('label');
    	this.inputID = document.createElement('input');
    	
    	this.inputNombre = document.createElement('input');
    	this.txtNombre = document.createElement('label');

    	this.txtDescripcion = document.createElement('label');
    	this.inputDescripcion = document.createElement('textarea');
    	
    	this.txtActivo = document.createElement('label');
    	this.activo = document.createElement('input');

    	this.inputID.disabled= true;
    	this.inputID.setAttribute('type','text');
    	this.inputNombre.setAttribute('type','text');
    	this.inputDescripcion.setAttribute('rows','4');
    	this.activo.setAttribute('type','checkbox');

    	this.txtID.innerText= "ID: ";
    	this.txtNombre.innerText= "Nombre: ";
    	this.txtDescripcion.innerText= "Descripción: ";
    	this.txtActivo.innerText ="Activo: "

    	
    	this.div.appendChild(this.txtID);
    	this.div.appendChild(this.inputID);
    	this.div.appendChild(this.txtNombre);
    	this.div.appendChild(this.inputNombre);
    	this.div.appendChild(this.txtDescripcion);
    	this.div.appendChild(this.inputDescripcion);
    	this.div.appendChild(this.txtActivo);
    	this.div.appendChild(this.activo);

    	this.shadow.appendChild(this.div);




this.addEventListener('complete', e =>{

	console.log("llego al otro shadow");
	this.inputID.value = e.detail.marca.idMarca;
	this.inputNombre.value = e.detail.marca.nombre;
	this.inputDescripcion.value = e.detail.marca.descripcion;
	this.activo.checked = e.detail.marca.activo;


});

    }
}
customElements.define('details-marca', DetailsMarca);

export default DetailsMarca;


