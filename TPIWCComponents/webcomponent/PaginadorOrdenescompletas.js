import Paginator from "./Paginator.js"
import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
class PaginatorOrdenescompletas extends Paginator{
constructor(){
    super();
    this._handler=new OrdenTrabajoResourceClient();
    this._completos=true;
}
}
customElements.define("paginator-oc",PaginatorOrdenescompletas);
export default PaginatorOrdenescompletas;