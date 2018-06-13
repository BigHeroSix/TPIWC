import AbstractResourceClient from './AbstractResourceClient.js';
class EquipoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/equipo";
  }
  findDetalle(id) {
    return fetch(this._url +"/"+id+"/detalle");
  }
}
export default EquipoResourceClient;