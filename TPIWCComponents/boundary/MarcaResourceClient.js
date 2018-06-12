import AbstractResourceClient from './AbstractResourceClient.js';
class MarcaResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/marca";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  count(){
    return fetch(this.url+ "/count");
  }
  
}
export default MarcaResourceClient;