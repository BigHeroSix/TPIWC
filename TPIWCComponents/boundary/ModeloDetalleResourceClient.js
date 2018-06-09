import AbstractResourceClient from './AbstractResourceClient.js';
class ModeloDetalleResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/modelodetalle";
  }
 
}
export default ModeloDetalleResourceClient;