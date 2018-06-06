import AbstractResourceClient from './AbstractResourceClient.js';
class ProcedimientoPasoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/procedimientopaso";
  }

}
export default ProcedimientoPasoResourceClient;