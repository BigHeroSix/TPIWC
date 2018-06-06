import AbstractResourceClient from './AbstractResourceClient.js';
class TipoResponsableResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/tiporesponsable";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default TipoResponsableResourceClient;