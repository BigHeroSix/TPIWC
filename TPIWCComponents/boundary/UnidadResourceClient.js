import AbstractResourceClient from './AbstractResourceClient.js';
class UnidadResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/unidad";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default UnidadResourceClient; 