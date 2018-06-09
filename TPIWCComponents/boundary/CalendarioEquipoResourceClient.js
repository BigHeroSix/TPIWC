import AbstractResourceClient from './AbstractResourceClient.js';
class CalendarioEquipoResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/calendarioequipo";
  }

}
export default CalendarioEquipoResourceClient;