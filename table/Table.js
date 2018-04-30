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
            };

            let divPaginador = document.createElement("div");
            divPaginador.className = "divPaginador";
            let divBotones = document.createElement("div");
            divBotones.className = "divBotones";
            divPaginador.appendChild(divBotones);
            divPaginador.appendChild(select);
            this._root.appendChild(divPaginador);
            this.crearPaginador(0, pagesize);
        }


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


    crearPaginador(first, pagesize) {
        console.log("first: "+first);
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
                this.crearPaginador(first, pagesize);
                this.recargarTabla(first, pagesize);
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

                rows.forEach((value) => {
                    value.style.background = "inherit";
                });
                tr.style.background = "#C1E5EB"
                let rowSelected = tr.sectionRowIndex;
                console.log("ID Marca seleccionada: " + this.lista[rowSelected].idMarca);
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