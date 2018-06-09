class Table extends HTMLElement {
    constructor(lista) {
        super();
        this._root = this.attachShadow({
            mode: 'open'
        });
        this._asc = false;
        this._rowIndex = 0;
    }
    
    connectedCallback() {
        let estilo = document.createElement("style");
        if (this.tittle) {
            let tittleDiv = document.createElement("div");
            tittleDiv.innerText = this.tittle;
            tittleDiv.style.fontSize = "25px";
            tittleDiv.style.color = "gray";
            this._root.appendChild(tittleDiv);
        }
        this.link = document.createElement('link');
        this.link.setAttribute('rel', 'stylesheet');
        this.link.setAttribute('href', './resources/iconos/style.css');
        this._root.appendChild(this.link);

        estilo.innerText += `
           
            .selectedRow{
                background: #C1E5EB !important;
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

            th span:hover{
                cursor: pointer;    
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
            this._root.appendChild(estilo);
                        
            

        this.columns = this.querySelectorAll("wc-table-column");
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");

        //this.style.padding = "8px";
        this.style.textAlign = "center";
        this.style.fontSize = "24px";
        this.style.font = "18px arial,serif";
        table.style.borderCollapse = "collapse";
        this.style.backgroundcolor = "#fff";
        table.style.width = "100%";

        

            //this.style.padding="8px";
            this.style.textAlign="center";
            this.style.fontSize="24px";
            this.style.font="18px arial,serif";
            table.style.borderCollapse="collapse";
            this.style.backgroundcolor= "#fff";
            table.style.width= "100%";
            table.style.borderCollapse = "collapse";



            
        this.columns.forEach((column, index) => {

            let th = document.createElement("th");
            th.innerText = column.getAttribute("header");
            if (column.getAttribute("sortable") !== null) {
                let span = document.createElement('span');
                span.setAttribute('class', 'icon-circle-down');
                span.style.color = "#fff";
                span.style.display = "inline";
                span.style.paddingLeft = "10px";

                th.appendChild(span);
                span.onclick = (e) => this.sortTable(column.getAttribute('value'));
            }

            if (column.getAttribute("width")) {
                th.style.width = column.getAttribute("width");
            }


            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
        this._root.appendChild(table);
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
        if(e.keyCode===13&&rows[this._rowIndex].hasAttribute("class")){
            let event=new CustomEvent(
                "selectedRow",
            {
                bubbles: true,
                composed:true,
                detail:{
                    headers:rows[0].getElementsByTagName("th"),
                    source: rows[this._rowIndex].getElementsByTagName("td")
                }
              
            }
        )
        this.dispatchEvent(event);

        }
        }
    
    

    dataProvider(data) {
        this.data=data;
            window.onkeydown=(e)=>this.keypressHandler(e);
        if(this._root.querySelector("tbody")){
            this.recargarTabla(data)
        }else{
            let table=this._root.querySelector("table");
            let tbody=this.llenarTabla(data);
            table.appendChild(tbody);
            
        }

    }

    manejoSeleccion(rows) {
        rows.forEach((value) => {
            value.removeAttribute("class");
        });
    }

   
    recargarTabla(data) {
        this._root.querySelector("table").replaceChild(this.llenarTabla(data), this._root.querySelector("tbody"));
        
        //this._root.querySelector("table").appendChild();
    }


    llenarTabla(data) {
        let tbody = document.createElement("tbody");

        //first y pagesize diferentes
        for (let i =0;i < data.length; i++) {
            if (data[i] == undefined) {
                break;
            }
            let tr = document.createElement("tr");
            tr.onclick = (e) => {

                let rows = this._root.querySelectorAll("tr");

                this.manejoSeleccion(rows);
                tr.className = "selectedRow";
                this._rowIndex = tr.sectionRowIndex + 1;
                let event = new CustomEvent(
                    "selectedRow", {
                        bubbles: true,
                        composed: true,
                        detail: {
                            headers: rows[0].getElementsByTagName("th"),
                            source: rows[this._rowIndex].getElementsByTagName("td")
                        }
                    }
                )
                this.dispatchEvent(event);
            }
            this.columns.forEach((column) => {
                let td = document.createElement("td");
                td.setAttribute("header", column.getAttribute("header"));

                let campos = column.getAttribute('value').split(".");
                var campo = data[i][`${campos[0]}`];

                if (campos.length > 1) {
                    for (let i = 0; i < campos.length - 1; i++) {
                        campo = campo[`${campos[i + 1]}`];
                        if (campo.length === 1) {
                            break;
                        }
                    }
                }
                td.innerText = campo;
                if (column.getAttribute("width")) {
                    td.style.width = column.getAttribute("width");
                }
                tr.appendChild(td);
            });
            tbody.appendChild(tr);

        }
        return tbody;
    }

    sortTable(n) {
        if (this._asc) {
            this.data.sort((a, b) => {

                this._asc = false;
                return a[n] < b[n] ? -1 : 1;
            });
        }else{
            this.data.sort((a, b)=>{
                
                this._asc=true;
                 return b[n]<a[n] ? -1:1;
                });}
        this.recargarTabla(this.data);
        
    }


    get getData() {
        return this.data;
    }

    get tittle() {
        return this.getAttribute("tittle");
    }
    set tittle(tittle) {
        this.setAttribute("tittle", tittle);
    }

    get maxHeight() {
        return this.getAttribute("maxHeight");
    }

}

customElements.define("wc-table", Table);
export default Table;