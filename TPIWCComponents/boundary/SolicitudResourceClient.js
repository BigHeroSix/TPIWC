import AbstractResourceClient from './AbstractResourceClient.js';
class SolicitudResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/solicitud";
  }

  obtenerEstado(id){
    return fetch(this._url+"/"+id+"/estado");
  }

  obtenerPasosCompletados(id){
    return fetch(this._url+"/"+id+"/pasoscompletados");
  }
 
}
export default SolicitudResourceClient;