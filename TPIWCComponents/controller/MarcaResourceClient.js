import AbstractResourceClient from './AbstractResourceClient.js';
class MarcaResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/equipo";
  }
  findByNameLike(chars) {
    return fetch(this._url + "/nombre/" + chars);
  }
  findAll() {
    return fetch(this._url);
  }
  findByRange(first, pagesize) {
    return fetch(this._url + "?first=" + first + "&pagesize=" + pagesize);
  }
}
export default MarcaResourceClient;
