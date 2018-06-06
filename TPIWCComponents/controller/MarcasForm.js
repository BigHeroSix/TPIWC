import MarcaResourceClient from "../boundary/MarcaResourceClient.js";
class MarcasForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener("complete", (e) => {
            let service = new MarcaResourceClient();
            service.findByNameLike(e.detail.char)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    document.querySelector("auto-complete").setAttribute("options", JSON.stringify(data));
                })

        })
    }


}
customElements.define("marcas-form", MarcasForm);
export default MarcasForm;