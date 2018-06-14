class AbstractResourceClient {
  constructor() {
    this._url = 'http://192.168.43.82:8080/MantenimientoMiddleWare-web-1.0-SNAPSHOT/webresources';
  }
  get url() {
    return this._url;
  }
  findAll() {
    return fetch(this._url);
  }
  findByRange(first, pagesize) {
    return fetch(this._url + "?first=" + first + "&pagesize=" + pagesize);
  }
  findById(id) {
    return fetch(this._url + "/" + id); 
  }
}
export default AbstractResourceClient;