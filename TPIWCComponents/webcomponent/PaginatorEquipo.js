import Paginator from "./Paginator.js"
import EquipoResourceClient from "../boundary/EquipoResourceClient.js"
class PaginatorEquipo extends Paginator {
    constructor() {
        super();
        this._handler = new EquipoResourceClient();
    }
}
customElements.define("equipo-paginator", PaginatorEquipo);
export default Paginator;