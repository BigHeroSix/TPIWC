import AbstractResourceClient from './AbstractResourceClient.js';
class OrdenTrabajoDetalleEstadoPasoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/ordentrabajodetalleestadopaso";
  }
 
}
export default OrdenTrabajoDetalleEstadoPasoResourceClient;