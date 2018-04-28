class WCButton extends  HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    get legend(){
        return this.getAttribute('legend');
    }

    get icon(){
        return this.getAttribute('icon');
    }

    connectedCallback() {

this.button = document.createElement('button');
        this.span = document.createElement('span');

        this.span.setAttribute('class',this.getAttribute('icon'));

        this.button.appendChild(this.span);
        this.button.innerHTML += this.getAttribute("legend");
        
        

        this.shadow.appendChild(this.button);
    }

        
        
}
customElements.define('wc-button', WCButton);

export default WCButton;
