import Paginator from "./Paginator.js"
import MarcaResourceClient from "../boundary/MarcaResourceClient.js"
class PaginatorMarca extends Paginator{
    constructor(){
        super();
        this._handler=new MarcaResourceClient();
    }

}
customElements.define("p-m",PaginatorMarca);
export default Paginator;