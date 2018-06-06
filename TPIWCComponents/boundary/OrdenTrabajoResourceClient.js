import AbstractResourceClient from './AbstractResourceClient.js';
class OrdenTrabajoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/ordentrabajo";
  }
  
}
export default OrdenTrabajoResourceClient;