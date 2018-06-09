import AbstractResourceClient from './AbstractResourceClient.js';
class TipoMantenimientoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/tipomantenimiento";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default TipoMantenimientoResourceClient;