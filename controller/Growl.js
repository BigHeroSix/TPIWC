class Growl extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.divContenedor = document.createElement("div");
        this.divContenedor.className = "container invisible";
        this.tittleText = document.createElement("h4");
        this.messageText = document.createElement("p");
        this.divContenedor.appendChild(this.tittleText);
        this.divContenedor.appendChild(this.messageText);
        let estilo = document.createElement("style");
        estilo.textContent = `.container{
            width: 200px;
            background-color: rgba(0, 153, 204,0.9);
            position: fixed;
            display:block;
            opacity:1;
            padding: 0px 12px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(60,60,60,0.8);
            transition: opacity 1s;
        }
        .invisible{
            opacity: 0;
            display: none;
        }`;
        this._root.appendChild(estilo);
        this._root.appendChild(this.divContenedor);
    }

    showMessage(tittle, message, type) {
        this.tittleText.innerText = tittle? tittle:"";
        this.messageText.innerText = message?message:"";
        this.divContenedor.classList.remove("invisible");
        setTimeout(() => this.divContenedor.classList.add("invisible"), 5000);
    }


}

customElements.define("wc-growl", Growl);

export default Growl;