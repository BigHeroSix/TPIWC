import AbstractResourceClient from './AbstractResourceClient.js';
class SolicitudResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/solicitud";
  }
 
}
export default SolicitudResourceClient;