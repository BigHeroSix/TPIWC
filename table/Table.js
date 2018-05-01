class Table extends HTMLElement {
    constructor(lista) {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this._asc=true;
        this._rowIndex=0;
    }

    connectedCallback() {
        if (this.tittle) {
            let tittleDiv = document.createElement("div");
            tittleDiv.innerText = this.tittle;
            tittleDiv.style.fontSize= "25px";
            tittleDiv.style.color= "gray";
            this._root.appendChild(tittleDiv);

        }
    }

    keypressHandler(e){
        let rows = this._root.querySelectorAll("tr");
        
    
        if(e.keyCode===40){
            if(this._rowIndex<rows.length-1)
            {this._rowIndex++;
            this.manejoSeleccion(rows);
            rows[this._rowIndex].className="selectedRow";
            }
        }
        else if(e.keyCode===38){
            if(this._rowIndex>1)
            {
            this._rowIndex--;
            this.manejoSeleccion(rows);

            rows[this._rowIndex].className="selectedRow";
            }
        }
        console.log("Key press: "+this._rowIndex);
        if(e.keyCode===13&&rows[this._rowIndex].hasAttribute("class")){
            console.log(rows[this._rowIndex].getElementsByTagName("td")[0].textContent);
        }
    }
    

    setLista(lista) {
        var estilo = document.createElement("style");
        var pagesize = 5;
        this.lista = lista;
       
        //paginador
        if (this.paginator) {

            //select paginador
            let select = document.createElement("select");
            if (this.pagesizeTemplate) {
                let tamanios = this.pagesizeTemplate.split(",");
                pagesize = parseInt(tamanios[0]);
                console.log(pagesize);
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
                this.recargarTabla(0, pagesize);
                this.crearPaginador(0, pagesize);
                this.blur();
                
            };
            window.onkeydown=(e)=>this.keypressHandler(e);

            let divPaginador = document.createElement("div");
            divPaginador.className = "divPaginador";
            let divBotones = document.createElement("div");
            divBotones.className = "divBotones";
            estilo.innerText += `
            .divBotones{
                display: inline-block;
            }
            .divPaginador select {
                color: black;
                float: center;
                padding: 8px 16px;
                text-decoration: none;
                margin:6px;
            }
            .divPaginador option:hover {
                background-color:gray;
                color: black;
                border-radius: 5px;
            }

            .divBotones button {
                color: black;
                float: center;
                padding: 8px 16px;
                text-decoration: none;
            }
            
            .divBotones button:hover:not(:disabled) {
                background-color:black;
                color: white;
                border-radius: 5px;
            }
            .selectedRow{
                background: #C1E5EB !important;
            }
            .divBotones button:disabled {
                background-color: #aaa;
                
                border-radius: 5px;

            }
            ::-webkit-scrollbar {
                width: 3px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: rgba(48, 101, 201, 0.7);
      } 
            table{
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
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
                    max-height: 300px;
                    overflow-y: auto;
                    overflow-x:hidden;
                }
                thead, tbody tr {
                    display:table;
                    width:100%;
                    table-layout:fixed;
                }
                    `;
            divPaginador.appendChild(divBotones);
            divPaginador.appendChild(select);
            this._root.appendChild(divPaginador);
            this.crearPaginador(0, pagesize);
        }


        this.columns = this.querySelectorAll("wc-table-column");
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        this.columns.forEach((column, index) => {

            let th = document.createElement("th");
            if (column.getAttribute("sortable") !== null) {
                th.onclick = (e) => this.sortTable(column.getAttribute('value'));
            }
            th.innerText = column.getAttribute("header");
                      
    
            //style
          
            this.style.padding="8px";
            this.style.textAlign="center";
            this.style.border= "1px solid #ddd";
            this.style.fontSize="24px";
            this.style.font="18px arial,serif";
            table.style.borderCollapse="collapse";
            this.style.backgroundcolor= "#fff";
            table.style.width= "100%";
            th.style.padding = "8px";
            th.style.backgroundColor="black";
            th.style.color= "white";
                
                this._root.appendChild(estilo);

            tr.appendChild(th);
        });
        thead.appendChild(tr);



        //METODO
        var tbody;
        console.log(pagesize);
        if (this.paginator) {
            tbody = this.llenarTabla(0, pagesize);
        } else {
            tbody = this.llenarTabla(0, this.lista.length);
        }

        table.style.borderCollapse = "collapse";

        table.appendChild(thead);
        table.appendChild(tbody);
        this._root.appendChild(table);

    }

    manejoSeleccion(rows){
        rows.forEach((value) => {
            value.removeAttribute("class");
        });
    }

    crearPaginador(first, pagesize) {
        console.log("first "+first);
        //console.log("first: "+first);
        let divBotones = document.createElement("div");
        let numPaginadores = Math.ceil(this.lista.length / pagesize);

        //crear botones < <<
        let btnAnterior = document.createElement("button");
        let btnPrimero = document.createElement("button");
        btnAnterior.innerText = "<";
        btnPrimero.innerText = "<<";
        if (first > 0) {
            btnPrimero.onclick = () => {
                this.crearPaginador(0, pagesize);
                this.recargarTabla(0, pagesize);
            };
            btnAnterior.onclick = () => {
                this.recargarTabla(first - pagesize, pagesize);
                this.crearPaginador(first - pagesize, pagesize);
            };
        } else {
            btnAnterior.disabled = true;
            btnPrimero.disabled = true;
        }
        let btnSiguiente = document.createElement("button");
        let btnUltimo = document.createElement("button");
        btnSiguiente.innerText = ">";
        btnUltimo.innerText = ">>";
        if (first/numPaginadores < numPaginadores-1) {
            btnUltimo.onclick = () => {
                this.crearPaginador(pagesize*(numPaginadores-1), pagesize);
                this.recargarTabla(pagesize*(numPaginadores-1), pagesize);
            };
            btnSiguiente.onclick = () => {
                this.recargarTabla(first + pagesize, pagesize);
                this.crearPaginador(first + pagesize, pagesize);
            };
        } else {
            btnSiguiente.disabled = true;
            btnUltimo.disabled = true;
        }
        divBotones.appendChild(btnPrimero);
        divBotones.appendChild(btnAnterior);

        //crear botones nums
        //let i = 0;
        for (let i = 0; i < numPaginadores; i++) {
            let btnPaginador = document.createElement("button");
            btnPaginador.innerText = i + 1;
            btnPaginador.onclick = () => {
                this.crearPaginador((i) * pagesize, pagesize);
                this.recargarTabla((i) * pagesize, pagesize)
            };
            divBotones.appendChild(btnPaginador);
        }
        divBotones.appendChild(btnSiguiente);
        divBotones.appendChild(btnUltimo);

        divBotones.className = "divBotones";
        this._root.querySelector(".divPaginador").replaceChild(divBotones, this._root.querySelector(".divBotones"))
    }


    recargarTabla(first, pagesize) {
        this._root.querySelector("table").replaceChild(this.llenarTabla(first, pagesize), this._root.querySelector("tbody"));
        
        //this._root.querySelector("table").appendChild();
    }


    llenarTabla(first, pagesize) {
        let tbody = document.createElement("tbody");

        //first y pagesize diferentes
        for (let i = first; i < pagesize + first; i++) {
            if (this.lista[i] == undefined) { break; }
            let tr = document.createElement("tr");
            tr.onclick = (e) => {

                let rows = this._root.querySelectorAll("tr");
                
              this.manejoSeleccion(rows);
                tr.className="selectedRow";
                this._rowIndex=tr.sectionRowIndex+1;
            }
            this.columns.forEach((column) => {
                let td = document.createElement("td");
                //style
                td.style.border = "black 1px solid";
                td.style.padding = "3px";

                let campos = column.getAttribute('value').split(".");
                var campo = this.lista[i][`${campos[0]}`];

                if (campos.length > 1) {
                    for (let i = 0; i < campos.length - 1; i++) {
                        campo = campo[`${campos[i + 1]}`];
                        if (campo.length === 1) { break; }
                    }
                }
                td.innerText = campo;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);

        }
        return tbody;
    }

    sortTable(n){
        
        if(this._asc){
            this.lista.sort((a, b)=>{
                this._asc=!this._asc;
                return a[n]<b[n] ? -1:1;
                
            });
        }else{
            this.lista.sort((a, b)=>{
                this._asc=!this._asc;
                 return b[n]<a[n] ? -1:1;
                });}
        this.recargarTabla(0,parseInt(this._root.querySelector("select").value));
        
    }

    get pagesizeTemplate() {
        return this.getAttribute("pagesizeTemplate");
    }


    get paginator() {
        return this.getAttribute("paginator");
    }

    get getLista() {
        return this.lista;
    }

    get tittle() {
        return this.getAttribute("tittle");
    }
    set ttitle(tittle) {
        this.setAttribute("tittle", tittle);
    }
}


customElements.define("wc-table", Table);
export default Table;