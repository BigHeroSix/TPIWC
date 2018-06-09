import AbstractResourceClient from './AbstractResourceClient.js';
class PrioridadResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/prioridad";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default PrioridadResourceClient;