class AbstractResourceClient {
  constructor() {
    this._url = 'http://localhost:8080/MantenimientoMiddleWare-web-1.0-SNAPSHOT/webresources';
  }
  get url() {
    return this._url;
  }
}
export default AbstractResourceClient;