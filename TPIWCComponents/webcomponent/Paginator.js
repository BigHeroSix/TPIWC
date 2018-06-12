class Paginator extends HTMLElement{
    constructor(){
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this._count=0;
        this._handler=null;
    }

connectedCallback(){

    let estilo = document.createElement("style");
    let pagesize;

    let select = document.createElement("select");
    if (this.pagesizeTemplate) {
        let tamanios = this.pagesizeTemplate.split(",");
        
        pagesize = parseInt(tamanios[0]);
        this.crearEvento(0,pagesize,"paginatorOnload");
        tamanios.forEach((value) => {
            let option = document.createElement("option");
            option.innerText = value;
            option.setAttribute("value", value);
            select.appendChild(option);
        });
    } else {
        for (let i = 1; i <= 5; i++) {
            this.crearEvento(0,5,"paginatorOnload");

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
        this.crearEvento(0,pagesize,"onpagesize");
    };
    
    let divPaginador = document.createElement("div");
    divPaginador.className = "divPaginador";
    let divBotones = document.createElement("div");
    divBotones.className = "divBotones";
    estilo.innerText += `
            .divBotones{
                display: inline-block;
            }

            .divPaginador{
                width: 70%;
                margin: 0 auto;
                text-align: center;
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
            .selectedRow{
                background: #C1E5EB !important;
            }
            .divBotones button:disabled {
                background-color: #eee;
                color: #aaa
                border-radius: 5px;
                border: 0;
            }
            
            .btnActual {
                background-color: #0040FF !important;
                color: white !important;
            }

            .divNum{
                display: inline-block;
            }
            ::-webkit-scrollbar {
                width: 3px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: rgba(48, 101, 201, 0.7);
            } 
            th{
                padding: 8px;
                background-color: black;
                color: white;
            }
            table{
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
                border: 1px solid #000;
            }
            
            thead tr th {
                border-left: 0.5px solid #bbb;
            }
            
            table tr:nth-child(even){background-color: #f2f2f2;}
            
            table tr:hover {background-color: #ddd;}

            .selectedRow:hover{
                background: #C1E5EB;
            }
            
            table th {
                padding-y: 12px;
                }
                thead,tbody{
                    display:block;
                }
                tbody{
                    max-height: ${this.getAttribute("maxHeight")};
                    overflow-y: auto;
                    overflow-x:hidden;
                }
                thead, tbody tr {
                    display:table;
                    width:100%;
                    table-layout:fixed;
                }
                @media (max-width: 650px){
                    .divNum{
                        display: none;
                    }
                }
                @media (max-width: 600px){
                    table{
                        border: 1px solid #bbb;
                        border-bottom: 0;
                    }
                    table tr:nth-child(odd){
                        background-color: #ddd;
                    }
                    table tr:nth-child(even){
                        background-color: #fff;
                    }
                    tbody{
                        max-height: none;
                    }
                    thead{
                        display: none;
                    }
                    tbody td{
                        border: 0;
                        border-bottom: 1px solid #bbb; 
                        padding-left: 40%;
                        padding-right: 10px;
                        padding-top: 4px;
                        padding-bottom:4px;
                        display: block;
                        text-align: left;
                        width: 58% !important;
                    }
                    tbody td:before{
                        padding-left: 5px;
                        position: absolute;
                        left: 10px;
                        content: attr(header);
                        display: inline-block;
                    }
                }
                    `;
            divPaginador.appendChild(divBotones);
            divPaginador.appendChild(select);
            this._root.appendChild(divPaginador);
            this.crearPaginador(0, pagesize);
            this._root.appendChild(estilo);

            
}

crearEvento(first,pagesize,nombre){
    let data;
    let event;
    this._handler.findByRange(first,pagesize)
    .then((p)=>{
        return p.json();
    })
    .then((d)=>{
        event=new CustomEvent(
            nombre,
        {
            bubbles: true,
            composed:true,
            detail:{
                jsonData: d,
            }
          
        }
    );
    this.dispatchEvent(event);

    })
    .catch(e=>{
        error=e.message || "No hay nada que mostrar";
    })

   
}

crearPaginador(first, pagesize) {
    if(this._count===0){
    this._handler.count()
    .then(response=>{return response.text()})
    .then(data=>{this._count=data});
    }
    let divBotones = document.createElement("div");
    let numPaginadores = Math.ceil(this._count/pagesize);

    console.log("num: "+numPaginadores);
    console.log("pagesize: "+pagesize);
    //crear botones < <<
    let btnAnterior = document.createElement("button");
    let btnPrimero = document.createElement("button");
    btnAnterior.style.marginRight = "10px";
    btnAnterior.innerText = "<";
    btnPrimero.innerText = "<<";
    if (first > 0) {
        btnPrimero.onclick = () => {
            this.crearPaginador(0, pagesize);
            this.crearEvento(0,pagesize,"onpagesize");
           
        };
        btnAnterior.onclick = () => {

            this.crearPaginador(first - pagesize, pagesize);
            this.crearEvento(first - pagesize, pagesize,"onpagesize");
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
            this.crearEvento(pagesize * (numPaginadores - 1), pagesize,"onpagesize");
        };
        btnSiguiente.onclick = () => {
            this.crearPaginador(first + pagesize, pagesize);
            this.crearEvento(first + pagesize, pagesize,"onpagesize");
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
            this.crearEvento((i) * pagesize, pagesize,"onpagesize");
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

get count(){
    return this._count;
}

set count(c){
    if(c){
        this._count=c;
    }
}

get pagesizeTemplate() {
    return this.getAttribute("pagesizeTemplate");
}

}
export default Paginator;