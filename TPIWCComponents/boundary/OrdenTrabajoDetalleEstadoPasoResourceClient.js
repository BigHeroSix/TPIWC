import AbstractResourceClient from './AbstractResourceClient.js';
class OrdenTrabajoDetalleEstadoPasoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/ordentrabajodetalleestadopaso";
  }

  findDetalleEstadoPasoCompletado(idEquipoDetalle) {
    return fetch(this._url + "/detalleestadopasocompletado/" + idEquipoDetalle);
  }
}
export default OrdenTrabajoDetalleEstadoPasoResourceClient;