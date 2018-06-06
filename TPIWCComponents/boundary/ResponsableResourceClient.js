import AbstractResourceClient from './AbstractResourceClient.js';
class ResponsableResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/responsable";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  
}
export default ResponsableResourceClient;