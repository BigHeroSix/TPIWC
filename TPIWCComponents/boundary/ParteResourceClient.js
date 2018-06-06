import AbstractResourceClient from './AbstractResourceClient.js';
class ParteResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/parte";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default ParteResourceClient;