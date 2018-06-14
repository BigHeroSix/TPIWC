import AbstractResourceClient from './AbstractResourceClient.js';
class EquipoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/equipo";
  }
  findDetalle(id) {
    return fetch(this._url +"/"+id+"/detalle");
  }

  historial(id){
    return fetch(this._url+"/"+id+"/historial");
  }
  
  count(){
    return fetch(this.url+ "/count");
  }
  
  findByCodigoCorrelativoLike(name){
    return fetch(this.url+ "/codigo/"+name);
  }
}
export default EquipoResourceClient;