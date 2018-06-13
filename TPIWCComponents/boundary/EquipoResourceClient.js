import AbstractResourceClient from './AbstractResourceClient.js';
class EquipoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/equipo";
  }
  count(){
    return fetch(this.url+ "/count");
  }
}
export default EquipoResourceClient;