import AbstractResourceClient from './AbstractResourceClient.js';
class ProcedimientoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/procedimiento";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default ProcedimientoResourceClient;