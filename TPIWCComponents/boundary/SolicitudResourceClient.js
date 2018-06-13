import AbstractResourceClient from './AbstractResourceClient.js';
class SolicitudResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/solicitud";
  }

  obtenerEstado(id){
    return fetch(this._url+"/"+id+"/estado");
  }
 
}
export default SolicitudResourceClient;