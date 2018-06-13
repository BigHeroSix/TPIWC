import AbstractResourceClient from './AbstractResourceClient.js';
class OrdenTrabajoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/ordentrabajo";
  }
  count(){
    return fetch(this._url+ "/count");
  }
  
  byDate(fecha){
    return fetch(this._url+ "/fecha/"+fecha);
  }

  byUser(name){
    return fetch(this._url+" /user/"+name);
  }

  byCorrelativo(codigo){
    return fetch(this._url+" /correlativo/"+codigo);
  }
  
  getAllCompletos(first,pagesize){
    return fetch(this._url + "/completos?first=" + first + "&pagesize=" + pagesize);
  }

  getIncompletos(first,pagesize){
    return fetch(this._url+" noFinalizadas?first=" + first + "&pagesize=" + pagesize);
  }

}
export default OrdenTrabajoResourceClient;