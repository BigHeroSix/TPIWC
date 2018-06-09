import AbstractResourceClient from './AbstractResourceClient.js';
class CalendarioResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/calendario";
  }

}
export default CalendarioResourceClient;