import AbstractResourceClient from './AbstractResourceClient.js';
class OrdenesNoFinalizadasResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/ordentrabajo/noFinalizadas";
  }
  
}
export default OrdenesNoFinalizadasResourceClient;