import AbstractResourceClient from './AbstractResourceClient.js';
class OrdenTrabajoDetalleResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/ordentrabajodetalle";
  }
  
}
export default OrdenTrabajoDetalleResourceClient;