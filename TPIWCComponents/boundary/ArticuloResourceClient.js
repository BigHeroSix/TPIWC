import AbstractResourceClient from './AbstractResourceClient.js';
class ArticuloResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/articulo";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default ArticuloResourceClient;