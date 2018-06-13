import AbstractResourceClient from './AbstractResourceClient.js';
class EquipoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/equipo";
  }

  historial(id){
    return fetch(this._url+"/"+id+"/historial");
  }
  
}
export default EquipoResourceClient;