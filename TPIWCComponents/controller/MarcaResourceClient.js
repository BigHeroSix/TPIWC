import AbstractResourceClient from './AbstractResourceClient.js';
class MarcaResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/marca";
  }
  findByNameLike(chars){
    return fetch(this._url + "/nombre/" + chars);
  }
  findAll(){
    return fetch(this._url);
  }
}
export default MarcaResourceClient;