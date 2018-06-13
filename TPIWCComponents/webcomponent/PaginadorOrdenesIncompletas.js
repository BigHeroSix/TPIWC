import Paginator from "./Paginator.js"
import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
class PaginatorOrdenesIncompletas extends Paginator{
constructor(){
    super();
    this._handler=new OrdenTrabajoResourceClient();
    this._type=false;
}
}
customElements.define("paginator-oi",PaginatorOrdenesIncompletas);
export default PaginatorOrdenesIncompletas;