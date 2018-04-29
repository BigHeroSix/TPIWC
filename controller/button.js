class WCButton extends  HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    get legend(){
        return this.getAttribute("legend");
    }

    get icon(){
        return this.getAttribute("icon");
    }

    connectedCallback() {

        this.button = document.createElement('button');
        this.span = document.createElement('span');
        this.link = document.createElement('link');

        //attributes
        this.link.setAttribute('rel','stylesheet');
        this.link. setAttribute('href','resources/iconos/style.css');
        this.span.setAttribute('class',this.getAttribute("icon"));
        this.button.appendChild(this.span);
        this.button.innerHTML += this.getAttribute("legend");

        //function
        this.button.onclick = () => this.clickButtton();
        
        //style
        this.button.style.padding = "6px";
        this.button.style.fontSize = "16px";
        this.button.style.fontWeight = "bold";
        this.button.style.backgroundColor = "#17a2b8";
        this.button.style.borderColor = "#17a2b8";
        this.button.style.color = "#fff";
        this.button.style.borderRadius = "5px";
        this.span.style.marginRight = "10px";
        
        this.shadow.appendChild(this.link);
        this.shadow.appendChild(this.button);
        //this.shadow.appendChild(this.span);
    }

    clickButtton(){
        console.log("click en el buton");
    }        
        
}
customElements.define('wc-button', WCButton);

export default WCButton;
