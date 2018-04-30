class Table extends HTMLElement {
    constructor(lista) {
        super();
        this._root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        if (this.tittle) {
            let tittleDiv = document.createElement("div");
            //let tittleText = document.createAttribute("h4");
            //tittleText.innerText = this.tittle;
            tittleDiv.innerText = this.tittle;
            this._root.appendChild(tittleDiv);
             
            
        }
    
    }


    setLista(lista){
        
        this.lista = lista;
        this.columns = this.querySelectorAll("wc-table-column");
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        this.columns.forEach((column) => {
            let th = document.createElement("th");
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


            tr.appendChild(th);
        });
        thead.appendChild(tr);

        //METODO
        var tbody;
        if(this.paginator){
            tbody = this.llenarTabla(0,5); 
        }else{
            tbody = this.llenarTabla(0,this.lista.length);
        }
        
        table.style.borderCollapse="collapse";
        
        table.appendChild(thead);
        table.appendChild(tbody);
        this._root.appendChild(table);
    }


    llenarTabla(first,pagesize){
        let tbody = document.createElement("tbody");
        
        //first y pagesize diferentes
        for (let i = first; i < pagesize + first; i++) {
            if (this.lista[i] == undefined) { break; }
            let tr = document.createElement("tr");
            tr.onclick=(e)=>{
                let rows=this._root.querySelectorAll("tr");

                rows.forEach((value)=>{
                value.style.background="inherit";
                });
                tr.style.background="#C1E5EB"
                let rowSelected=tr.sectionRowIndex;
                console.log("ID Marca seleccionada: "+this.lista[rowSelected].idMarca);
            }
            this.columns.forEach( (column)=>{
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


    get paginator(){
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