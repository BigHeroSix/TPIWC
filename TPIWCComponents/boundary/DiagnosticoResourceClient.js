import AbstractResourceClient from './AbstractResourceClient.js';
class DiagnosticoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/diagnostico";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
 
}
export default DiagnosticoResourceClient;