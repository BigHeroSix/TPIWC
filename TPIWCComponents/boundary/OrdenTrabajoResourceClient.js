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
    return fetch(this._url+"/user/"+name);
  }

  byCorrelativo(codigo){
    return fetch(this._url+"/correlativo/"+codigo);
  }
  
  getAllCompletos(first,pagesize){
    return fetch(this._url+"/completos?first=" + first + "&pagesize=" + pagesize);
  }

  getbyFilter(first,pagesize,filter){
    return fetch(this._url + "/filter?first=" + first + "&pagesize=" + pagesize + "&filter=" + filter);
  }

  getIncompletos(first,pagesize){
    return fetch(this._url+"/noFinalizadas?first=" + first + "&pagesize=" + pagesize);
  }
  getCount(){
    return fetch(this._url+"/countFinalizadas");
  }

}
export default OrdenTrabajoResourceClient;