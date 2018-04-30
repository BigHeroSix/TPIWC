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

    setLista(lista) {
        //paginado














        this.lista = lista;

        this.columns = this.querySelectorAll("wc-table-column");
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        this.columns.forEach((column) => {
            let th = document.createElement("th");
            th.innerText = column.getAttribute("header");
            //style
            th.style.border = "black 1px solid";
            th.style.padding = "3px"

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