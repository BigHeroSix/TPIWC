class Autocomplete extends  HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({mode: 'open'});
        this.response;        
    }

    static get observedAttributes() {
        return ['options'];
      }

    get legend(){
        this.getAttribute("legend");
    }

    get options(){
        this.getAttribute("options");
    }

    get findtag(){
        this.getAttribute("findtag");
    }
    
    connectedCallback() {
    this.parent=document.createElement("div");
    this.input=document.createElement("input");

    this.input.setAttribute("id","search");
    this.dataList=document.createElement("datalist");
    this.dataList.setAttribute("id","lista");
    this.input.setAttribute("list","lista");
    this.input.setAttribute("placeholder",this.getAttribute("legend"));
    this.input.onkeyup=_=>{
        let charSequence=this.input.value.trim();
        if(charSequence){
            var event=new CustomEvent(
                "complete",
            {
                bubbles: true,
                composed:true,
                detail:{
                    char: charSequence
                }
              
            }
        )
        this.dispatchEvent(event);

        }
    }
    this.parent.appendChild(this.input);
    this.parent.appendChild(this.dataList);    
    this._root.appendChild(this.parent);


    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.dataList.innerHTML=undefined;
        let options=JSON.parse(this.getAttribute("options"));     
        options.forEach((value,index) => {
            let nodo=document.createElement("option");
            let textNode = document.createTextNode(value[this.getAttribute("findtag")]);
            nodo.appendChild(textNode);
            nodo.setAttribute("id",value.idMarca);
            this.dataList.appendChild(nodo);
        });
    }
}

customElements.define('auto-complete', Autocomplete);

export default Autocomplete;
