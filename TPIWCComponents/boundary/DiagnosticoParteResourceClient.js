import AbstractResourceClient from './AbstractResourceClient.js';
class DiagnosticoParteResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url += "/diagnosticoparte";
  }

}
export default DiagnosticoParteResourceClient;