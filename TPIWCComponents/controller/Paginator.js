import MarcaResourceClient from './MarcaResourceClient.js';
class Paginator extends HTMLElement{
    constructor(){
        super();
        this._root = this.attachShadow({ mode: 'open' });
    }

connectedCallback(){
    let estilo = document.createElement("style");
    let pagesize = 5;

    let select = document.createElement("select");
    if (this.pagesizeTemplate) {
        let tamanios = this.pagesizeTemplate.split(",");
        pagesize = parseInt(tamanios[0]);
        tamanios.forEach((value) => {
            let option = document.createElement("option");
            option.innerText = value;
            option.setAttribute("value", value);
            select.appendChild(option);
        });
    } else {
        for (let i = 1; i <= 5; i++) {
            let option = document.createElement("option");
            option.innerText = i * 5;
            option.setAttribute("value", i * 5);
            select.appendChild(option);
        }
    }
    select.onchange = () => {
        pagesize = parseInt(select.options[select.selectedIndex].value);
        this.blur();
        this.crearPaginador(0, pagesize);

    };
    
    let divPaginador = document.createElement("div");
    divPaginador.className = "divPaginador";
    let divBotones = document.createElement("div");
    divBotones.className = "divBotones";
    estilo.innerText += `
            .divBotones{
                display: inline-block;
            }

            .divPaginador select {
                background-color: #81BEF7;
                color: black;
                float: center;
                padding: 8px 16px;
                text-decoration: none;
                margin:6px;
                border: 0;
                border-radius: 5px;
                height: 33px;
                cursor: pointer;
            }

            .divBotones button {
                background-color: #81BEF7;
                color: black;
                float: center;
                padding: 8px 16px;
                text-decoration: none;
                border: 0;
            }
            
            .divBotones button:hover:not(:disabled) {
                background-color: #084B8A;
                color: white;
                cursor: pointer;
            }
            .divBotones button:disabled {
                background-color: #eee;
                color: #aaa
                border-radius: 5px;
                border: 0;
            }
            .divNum{
                display: inline-block;
            }

            `
            divPaginador.appendChild(divBotones);
            divPaginador.appendChild(select);
            this._root.appendChild(divPaginador);
            this.crearPaginador(0, pagesize);
     this.mrc=new MarcaResourceClient();
            
}

crearEvento(first,pagesize){
    let error;
    let data;

    this.mrc.findByRange(first,pagesize)
    .then(p=>{
        return p.json;
    })
    .then(d=>{
        data=d;
    })
    .catch(e=>{
        error=e.message || "No hay nada que mostrar";
    })

    let event=new CustomEvent(
        "onpagesize_change",
    {
        bubbles: true,
        composed:true,
        detail:{
            jsonData:data,
            errorOutput:error
        }
      
    }
);
this.dispatchEvent(event);
}

crearPaginador(first, pagesize) {
    
    let divBotones = document.createElement("div");
    let numPaginadores = Math.ceil(this.lista.length / pagesize);

    //crear botones < <<
    let btnAnterior = document.createElement("button");
    let btnPrimero = document.createElement("button");
    btnAnterior.style.marginRight = "10px";
    btnAnterior.innerText = "<";
    btnPrimero.innerText = "<<";
    if (first > 0) {
        btnPrimero.onclick = () => {
            this.crearPaginador(0, pagesize);
            this.crearEvento(0,pagesize);
        };
        btnAnterior.onclick = () => {

            this.crearPaginador(first - pagesize, pagesize);
            this.crearEvento(first - pagesize, pagesize);
        };
    } else {
        btnAnterior.disabled = true;
        btnPrimero.disabled = true;
    }
    let btnSiguiente = document.createElement("button");
    btnSiguiente.style.marginLeft = "10px";
    let btnUltimo = document.createElement("button");
    btnSiguiente.innerText = ">";
    btnUltimo.innerText = ">>";
    if (Math.ceil((first + 1) / pagesize) < numPaginadores) {
        btnUltimo.onclick = () => {
            this.crearPaginador(pagesize * (numPaginadores - 1), pagesize);
            this.crearEvento(pagesize * (numPaginadores - 1), pagesize);
        };
        btnSiguiente.onclick = () => {
            this.crearPaginador(first + pagesize, pagesize);
            this.crearEvento(first + pagesize, pagesize);
        };
    } else {
        btnSiguiente.disabled = true;
        btnUltimo.disabled = true;
    }
    divBotones.appendChild(btnPrimero);
    divBotones.appendChild(btnAnterior);

    //crear botones nums
    var inicio = Math.floor((first + 1) / pagesize) - 3;
    if (inicio < 1) { inicio = 1; }
    let divNum = document.createElement('div');
    divNum.className = 'divNum';
    for (let i = inicio - 1; i < numPaginadores; i++) {
        let btnPaginador = document.createElement("button");
        btnPaginador.innerText = i + 1;
        if ((i === Math.floor((first) / pagesize))) {
            btnPaginador.className = "btnActual";
        }
        btnPaginador.onclick = () => {
            this.crearPaginador((i) * pagesize, pagesize);
            this.crearEvento((i) * pagesize, pagesize);
        };
        divNum.appendChild(btnPaginador);
        if ((i - inicio) > 4) { break; }
    }
    divBotones.appendChild(divNum);
    divBotones.appendChild(btnSiguiente);
    divBotones.appendChild(btnUltimo);

    divBotones.className = "divBotones";
    this._root.querySelector(".divPaginador").replaceChild(divBotones, this._root.querySelector(".divBotones"))

}

get pagesizeTemplate() {
    return this.getAttribute("pagesizeTemplate");
}


get paginator() {
    return this.getAttribute("paginator") !== null;
}

}
customElements.define("paginator-controller",Paginator);
export default Paginator;