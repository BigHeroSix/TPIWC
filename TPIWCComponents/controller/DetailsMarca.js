import MarcaResourceClient from "./MarcaResourceClient.js";
class DetailsMarca extends  HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    get nombre(){
        return this.getAttribute('nombre');
    }
    
    connectedCallback() {
        
        this.div = document.createElement('div');
//        this.div.setAttribute('style',`
//            
//            margin: 0 auto; 
//            width: 600px; 
//            background-color: #fff;            
//        `);
        
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
        this.txtActivo.innerText ="Activo: ";
        
        
        
        this.div.appendChild(this.txtID);
        this.div.appendChild(this.inputID);
        this.div.appendChild(this.txtNombre);
        this.div.appendChild(this.inputNombre);
        this.div.appendChild(this.txtDescripcion);
        this.div.appendChild(this.inputDescripcion);
        this.div.appendChild(this.txtActivo);
        this.div.appendChild(this.activo);
        
        this.shadow.appendChild(this.div);
        
    }
    
    mostrarDetalle(marca){
            console.log("llego al otro shadow");
            this.inputID.value = marca.idMarca;
            this.inputNombre.value = marca.nombre;
            this.inputDescripcion.value = marca.descripcion;
            this.activo.checked = marca.activo;
            
          }
}
customElements.define('details-marca', DetailsMarca);

export default DetailsMarca;


