import AbstractResourceClient from './AbstractResourceClient.js';
class PasosResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/pasos";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default PasosResourceClient;