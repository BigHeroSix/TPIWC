class TableColumn extends HTMLElement{
    constructor(){
        super();

    }

    get header(){
        return this.getAttribute("header");
    }

    set header(header){
        this.setAttribute("header",header);
    }
    get value(){
        return this.getAttribute("value");
    }

    set value(value){
        this.setAttribute("value",value);
    }
}

customElements.define("wc-table-column",TableColumn);
export default TableColumn;