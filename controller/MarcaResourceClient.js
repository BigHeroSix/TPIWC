import AbstractResourceClient from './AbstractResourceClient.js';
class MarcaResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/marca";
  }
  findByName(name){
    return fetch(this._url + "/nombre/" + name);
  }
}
export default MarcaResourceClient;
