class Table extends HTMLElement{
    constructor(lista){
        super();
        this._root = this.attachShadow({mode:'open'});        
    }

    connectedCallback(){
        if(this.tittle){
            let tittleDiv = document.createElement("div");
            //let tittleText = document.createAttribute("h4");
            //tittleText.innerText = this.tittle;
            tittleDiv.innerText = this.tittle;
            this._root.appendChild(tittleDiv);
        }
    }

    setLista(lista){
        console.log(lista[0].idModelo.idModelo);
        
        this.lista = lista;
        console.log("lista "+this.lista[0].nombre);
        let columns = this.querySelectorAll("wc-table-column");
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        columns.forEach( (column)=>{
            let th = document.createElement("th");
            th.innerText = column.getAttribute("header");
            tr.appendChild(th);
        } );
        thead.appendChild(tr);

        let tbody= document.createElement("tbody");
        this.lista.forEach( (row, index)=>{
            let tr = document.createElement("tr");
            columns.forEach( (column)=>{
                let td = document.createElement("td");
                let campos = column.getAttribute('value').split(".");
                var campo = row[`${campos[0]}`];
                console.log("campo "+campo);
                if(campos.length > 1){
                    for(let i = 0 ; i<campos.length-1; i++){
                        campo = campo[`${campos[i+1]}`];
                        if(campo.length===1){break;}
                    }
                }
                td.innerText = campo;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        this._root.appendChild(table);
    }



    get getLista(){
        return this.lista;
    }

    get tittle(){
        return this.getAttribute("tittle");
    }
    set ttitle(tittle){
        this.setAttribute("tittle",tittle);
    }
}

customElements.define("wc-table",Table);
export default Table;