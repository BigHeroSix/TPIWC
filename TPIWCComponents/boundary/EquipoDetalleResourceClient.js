import AbstractResourceClient from './AbstractResourceClient.js';
class EquipoDetalleResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/equipodetalle";
  }
  
}
export default EquipoDetalleResourceClient;