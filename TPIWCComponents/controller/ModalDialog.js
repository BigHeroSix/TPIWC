class ModalDialog extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this.style.display = "none";

    }

    get tittle() {
        return this.getAttribute("tittle");
    }

    set tittle(tittle) {
        this.setAttribute("tittle", tittle);
    }

    get width() {
        return this.getAttribute("width");
    }

    set width(width) {
        this.setAttribute("width", width);
    }

    connectedCallback(){

    }

    init(){

        this._info = this.innerHTML;
        this.innerHTML = "";
        
      
        this.containerDiv = document.createElement("div");
        this.contentDiv = document.createElement("div");
        this.tittleText = document.createElement("h2");
        this.btnCerrar = document.createElement("button");
        this.modal = document.createElement("div");

        this.btnCerrar.onclick = () => this.toggleVisibility();
        this.modal.onclick = () => this.toggleVisibility();
      
        

        //style
        //this.modal.style.zIndex = "-100";
        this.containerDiv.style.backgroundColor = "white";
        this.modal.style.position = "fixed";
        this.modal.style.top = "0px";
        this.modal.style.left = "0px";
        this.modal.style.width = "100%";
        this.modal.style.height = "100%";
        this.modal.style.backgroundColor = "rgba(80,80,80,0.8)";
        
        this.containerDiv.style.position = "fixed";
        console.log("width "+this.width);
        if(this.width){
            this.containerDiv.style.width = this.width;
        }else{
            this.containerDiv.style.width = "80%";
        }
        this.containerDiv.style.marginLeft = `calc((100% - ${this.width})/2)`;
        this.containerDiv.style.top = "50%";
        this.containerDiv.style.maxHeight = "95%";
        this.containerDiv.style.transform = "translateY(-50%)";
        this.containerDiv.style.boxShadow = "0 0 20px rgba(0,0,0,0.7)";
        this.containerDiv.style.overflowY = "auto";
        this.tittleText.style.margin = "0";
        this.tittleText.style.padding = "15px 20px";
        this.tittleText.style.backgroundColor = "#ccc";
        this.contentDiv.style.padding = "15px";
        this.btnCerrar.style.position = "fixed";
        this.btnCerrar.style.top = "20px";
        this.btnCerrar.style.right = "20px";
        this.btnCerrar.style.padding = "10px";



        //propiedades
        if(this.tittle){
             this.tittleText.innerText = this.tittle;
        }else{
            this.tittleText.innerText = "-";
        }
        this.btnCerrar.innerText = "x";



        this._root.appendChild(this.modal);
        this.containerDiv.appendChild(this.tittleText);
        this.contentDiv.innerHTML += this._info;
        this.containerDiv.appendChild(this.contentDiv);
        
        this._root.appendChild(this.containerDiv);
        this._root.appendChild(this.btnCerrar);
    }

    toggleVisibility(mostrar) {
        if (mostrar) {
            this.style.display = "block";
        } else {
            this.style.display = "none";
        }
    }






}

customElements.define('wc-modal-dialog', ModalDialog);

export default ModalDialog;