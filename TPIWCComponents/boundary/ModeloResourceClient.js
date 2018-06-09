import AbstractResourceClient from './AbstractResourceClient.js';
class ModeloResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/modelo";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }

}
export default ModeloResourceClient;